/* eslint-disable jsdoc/check-param-names */
export type UF<VT, RT> = (value: VT) => RT | PromiseLike<RT>

export type Composed<VT, RT> = (value?: VT) => Promise<RT>

/**
 * Compose promise-returning & async fns into a reusable pipeline.
 *
 * @param ...fns - Iterated over sequentially when returned `function` is called.
 * @returns The `fns` are applied from right to left.
 *
 * @example
 * ```
 * const addUnicorn = async string => `${string} Unicorn`;
 * const addRainbow = async string => `${string} Rainbow`;
 *
 * const pipeline = pCompose(addRainbow, addUnicorn);
 *
 * console.log(await pipeline('❤️'));
 * //=> '❤️ Unicorn Rainbow'
 * ```
 */
export function pCompose<VT, RT>(f1: UF<VT, RT>): Composed<VT, RT>
export function pCompose<VT, R1, RT>(f1: UF<R1, RT>, f2: UF<VT, R1>): Composed<VT, RT>
export function pCompose<VT, R1, R2, RT>(f1: UF<R2, RT>, f2: UF<R1, R2>, f3: UF<VT, R1>): Composed<VT, RT>
export function pCompose<VT, R1, R2, R3, RT>(f1: UF<R3, RT>, f2: UF<R2, R3>, f3: UF<R1, R2>, f4: UF<VT, R1>): Composed<VT, RT>
export function pCompose<VT, R1, R2, R3, R4, RT>(f1: UF<R4, RT>, f2: UF<R3, R4>, f3: UF<R2, R3>, f4: UF<R1, R2>, f5: UF<VT, R1>): Composed<VT, RT>
export function pCompose<VT, R1, R2, R3, R4, R5, RT>(f1: UF<R5, RT>, f2: UF<R4, R5>, f3: UF<R3, R4>, f4: UF<R2, R3>, f5: UF<R1, R2>, f6: UF<VT, R1>): Composed<VT, RT>
export function pCompose<VT, R1, R2, R3, R4, R5, R6, RT>(f1: UF<R6, RT>, f2: UF<R5, R6>, f3: UF<R4, R5>, f4: UF<R3, R4>, f5: UF<R2, R3>, f6: UF<R1, R2>, f7: UF<VT, R1>): Composed<VT, RT>
export function pCompose<VT, R1, R2, R3, R4, R5, R6, R7, RT>(f1: UF<R7, RT>, f2: UF<R6, R7>, f3: UF<R5, R6>, f4: UF<R4, R5>, f5: UF<R3, R4>, f6: UF<R2, R3>, f7: UF<R1, R2>, f8: UF<VT, R1>): Composed<VT, RT>
export function pCompose<VT, R1, R2, R3, R4, R5, R6, R7, R8, RT>(f1: UF<R8, RT>, f2: UF<R7, R8>, f3: UF<R6, R7>, f4: UF<R5, R6>, f5: UF<R4, R5>, f6: UF<R3, R4>, f7: UF<R2, R3>, f8: UF<R1, R2>, f9: UF<VT, R1>): Composed<VT, RT>
export function pCompose(...fns: any) {
  if (fns.length === 0)
    throw new Error('Expected at least one argument')
  return async (input: any) => {
    let value = input
    for (const fn of fns.reverse())
      value = await fn(value)
    return value
  }
}
