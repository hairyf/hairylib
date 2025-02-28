import { id } from 'ethers'

export function idprefix(errorCallString: string) {
  return id(errorCallString).slice(0, 10)
}
