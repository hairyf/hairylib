import { id } from 'ethers'

export function idprefix(errorCallString: string): string {
  return id(errorCallString).slice(0, 10)
}
