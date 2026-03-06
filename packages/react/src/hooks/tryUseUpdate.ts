import { useUpdate } from './useUpdate'

export function tryUseUpdate() {
  try {
    return useUpdate()
  }
  catch {
    return () => {}
  }
}
