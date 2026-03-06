import { tryUseReducer } from './tryUseReducer'

const updateReducer = (num: number): number => (num + 1) % 1_000_000

export function useUpdate(): () => void {
  const [, update] = tryUseReducer(updateReducer, 0)
  return update
}
