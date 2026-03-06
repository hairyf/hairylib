import { tryUseEffect, tryUseInsertionEffect, tryUseRef } from '@hairy/react-lib'

/**
 * The function is called right after the component is mounted.
 *
 * @param fn
 * @see {@link https://react.dev/reference/react/Component#componentdidmount React `componentDidMount()`}
 */
export function onMounted(fn: () => any) {
  tryUseEffect(() => {
    fn()
  }, [])
}

export function onBeforeMount(fn: () => any) {
  const isMounted = tryUseRef(false)
  if (!isMounted.current) {
    fn()
    isMounted.current = true
  }
}

/**
 * The function is called right before the component is unmounted.
 *
 * @param fn
 * @see {@link https://react.dev/reference/react/Component#componentwillunmount React `componentWillUnmount()`}
 */
export function onBeforeUnmount(fn: () => void) {
  tryUseEffect(() => {
    return () => {
      fn()
    }
  }, [])
}

export function onUnmounted(fn: () => void) {
  onBeforeUnmount(() => setTimeout(fn, 0))
}

/**
 * The function is called immediately after the component is re-rendered with updated props or state.
 * This method is not invoked during the initial render.
 *
 * @param fn
 * @see {@link https://react.dev/reference/react/Component#componentdidupdate React `componentDidUpdate()`}
 */
export function onUpdated(fn: () => void) {
  const isMounted = tryUseRef(false)
  tryUseEffect(() => {
    isMounted.current
      ? fn()
      : (isMounted.current = true)
  })
}

export function onBeforeUpdate(fn: () => void) {
  tryUseInsertionEffect(fn)
}
