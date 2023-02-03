type MyPromiseLike<T> = PromiseLike<T> | { then: (onfulfilled: (arg: any) => any) => any }
type MyAwaited<T extends MyPromiseLike<unknown>> = T extends MyPromiseLike<infer R>
  ? R extends MyPromiseLike<unknown> ? MyAwaited<R> : R
  : never
