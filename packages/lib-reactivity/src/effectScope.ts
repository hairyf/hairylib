/* eslint-disable jsdoc/check-param-names */
import type { ArgumentsType } from '@hairy/utils'
import { tryUseCallback, tryUseRef, tryUseState } from '@hairy/react-lib'
import { effectScope as vueEffectScope } from '@vue/reactivity'

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
  const [scope] = tryUseState(() => vueEffectScope(...args))
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
