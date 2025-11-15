import type { Status } from '../types'

export function track(action: any, status: Status) {
  let loadings = 0
  const tracking = () => loadings++ === 0 && (status.loading = true)
  const done = () => !--loadings && (status.loading = false)
  const fulfilled = (value: any) => {
    status.finished = true
    done()
    return value
  }
  const rejected = (error: any) => {
    status.error = error
    done()
    throw error
  }
  return function (...args: any[]) {
    tracking()
    try {
      const value = action(...args)
      return value instanceof Promise
        ? value.then(fulfilled, rejected)
        : fulfilled(value)
    }
    catch (error: any) {
      rejected(error)
    }
  }
}
