import { useUpdate } from './use-update'

export function tryUseUpdate() {
  try {
    return useUpdate()
  }
  catch {
    return () => {}
  }
}
