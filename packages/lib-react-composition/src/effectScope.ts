/* eslint-disable ts/ban-ts-comment */
/* eslint-disable jsdoc/check-param-names */
import type { ArgumentsType } from '@hairy/utils'
import type { EffectScope } from '@vue/reactivity'
import type { FunctionComponent } from 'react'
import { tryUseCallback, tryUseRef, tryUseState } from '@hairy/react-lib'
import { getCurrentScope as getVueCurrentScope, effectScope as vueEffectScope } from '@vue/reactivity'
import { createElement } from 'react'
import { onBeforeMount, onMounted, onUnmounted } from './lifecycle'

let activeEffectScope: EffectScope | undefined

function createVueEffectScope(...args: ArgumentsType<typeof vueEffectScope>) {
  const scope = vueEffectScope(...args)
  Reflect.set(scope, 'parent', activeEffectScope)
  if (!args[0] && activeEffectScope) {
    // @ts-expect-error
    const scopes = activeEffectScope.scopes || (activeEffectScope.scopes = [])
    Reflect.set(scope, 'index', scopes.push(scope) - 1)
  }
  return scope
}

/**
 * Creates an effect scope object which can capture the reactive effects (i.e.
 * computed and watchers) created within it so that these effects can be
 * disposed together. For detailed use cases of this API, please consult its
 * corresponding {@link https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md | RFC}.
 *
 * @param detached - Can be used to create a "detached" effect scope.
 * @see {@link https://vuejs.org/api/reactivity-advanced.html#effectscope Vue `effectScope()`}
 */
export function effectScope(...args: ArgumentsType<typeof vueEffectScope>) {
  const hasRun = tryUseRef(false)
  const [scope] = tryUseState(() => createVueEffectScope(...args))
  const originalRunRef = tryUseRef(scope.run)
  const runFn = tryUseCallback(<T>(fn: () => T) => {
    if (!hasRun.current) {
      hasRun.current = true
      return originalRunRef.current.bind(scope)(fn)
    }
    else {
      return undefined
    }
  }, [])

  scope.run = runFn

  return scope
}

export function withEffectScope<T extends FunctionComponent>(fn: T, detached?: boolean) {
  let currentEffectScope: EffectScope | undefined
  return ((...props: Parameters<T>) => {
    const scope = effectScope(detached)
    const element = createElement(fn, ...props)
    onBeforeMount(() => {
      currentEffectScope = activeEffectScope
      activeEffectScope = scope
    })
    onMounted(() => activeEffectScope = currentEffectScope)
    onUnmounted(() => scope.stop())
    return element
  }) as T
}

/**
 * Returns the current active effect scope if there is one.
 *
 * @see {@link https://vuejs.org/api/reactivity-advanced.html#getcurrentscope}
 */
export function getCurrentScope() {
  const [effectScope] = tryUseState(() => activeEffectScope || getVueCurrentScope())
  return effectScope
}

/**
 * Registers a dispose callback on the current active effect scope. The
 * callback will be invoked when the associated effect scope is stopped.
 *
 * @param fn - The callback function to attach to the scope's cleanup.
 * @see {@link https://vuejs.org/api/reactivity-advanced.html#onscopedispose}
 */
export function onScopeDispose(fn: () => void, _failSilently = false): void {
  if (activeEffectScope)
    Reflect.get(activeEffectScope, 'cleanups')?.push(fn)
}
