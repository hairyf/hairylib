export class Deferred<T> extends Promise<T> {
  resolve: (value: T) => Deferred<T>
  reject: (reason?: any) => Deferred<T>
  constructor() {
    let _resolve: (value: T | PromiseLike<T>) => void, _reject: (reason?: any) => void
    super((resolve_, reject_) => {
      _resolve = resolve_
      _reject = reject_
    })
    this.resolve = (value) => {
      _resolve(value)
      return this
    }
    this.reject = (reason) => {
      _reject(reason)
      return this
    }
  }
}
