/* eslint-disable jsdoc/check-param-names */
export type UF<VT, RT> = (value: VT) => RT | PromiseLike<RT>

export type Pipeline<VT, RT> = (value?: VT) => Promise<RT>

/**
Compose promise-returning & async fns into a reusable pipeline.

@param ...input - Iterated over sequentially when returned `function` is called.
@returns The `input` fns are applied from left to right.

@example
```
const addUnicorn = async string => `${string} Unicorn`;
const addRainbow = async string => `${string} Rainbow`;

const pipeline = pipe.promise(addUnicorn, addRainbow);

console.log(await pipeline('❤️'));
//=> '❤️ Unicorn Rainbow'
```
 */
export function pPipe<VT, RT>(f1: UF<VT, RT>): Pipeline<VT, RT>
export function pPipe<VT, R1, RT>(f1: UF<VT, R1>, f2: UF<R1, RT>): Pipeline<VT, RT>
export function pPipe<VT, R1, R2, RT>(f1: UF<VT, R1>, f2: UF<R1, R2>, f3: UF<R2, RT>): Pipeline<VT, RT>
export function pPipe<VT, R1, R2, R3, RT>(f1: UF<VT, R1>, f2: UF<R1, R2>, f3: UF<R2, R3>, f4: UF<R3, RT>): Pipeline<VT, RT>
export function pPipe<VT, R1, R2, R3, R4, RT>(f1: UF<VT, R1>, f2: UF<R1, R2>, f3: UF<R2, R3>, f4: UF<R3, R4>, f5: UF<R4, RT>): Pipeline<VT, RT>
export function pPipe<VT, R1, R2, R3, R4, R5, RT>(f1: UF<VT, R1>, f2: UF<R1, R2>, f3: UF<R2, R3>, f4: UF<R3, R4>, f5: UF<R4, R5>, f6: UF<R5, RT>): Pipeline<VT, RT>
export function pPipe<VT, R1, R2, R3, R4, R5, R6, RT>(f1: UF<VT, R1>, f2: UF<R1, R2>, f3: UF<R2, R3>, f4: UF<R3, R4>, f5: UF<R4, R5>, f6: UF<R5, R6>, f7: UF<R6, RT>): Pipeline<VT, RT>
export function pPipe<VT, R1, R2, R3, R4, R5, R6, R7, RT>(f1: UF<VT, R1>, f2: UF<R1, R2>, f3: UF<R2, R3>, f4: UF<R3, R4>, f5: UF<R4, R5>, f6: UF<R5, R6>, f7: UF<R6, R7>, f8: UF<R7, RT>): Pipeline<VT, RT>
export function pPipe<VT, R1, R2, R3, R4, R5, R6, R7, R8, RT>(f1: UF<VT, R1>, f2: UF<R1, R2>, f3: UF<R2, R3>, f4: UF<R3, R4>, f5: UF<R4, R5>, f6: UF<R5, R6>, f7: UF<R6, R7>, f8: UF<R7, R8>, f9: UF<R8, RT>): Pipeline<VT, RT>
export function pPipe(...fns: any[]) {
  if (fns.length === 0)
    throw new Error('Expected at least one argument')
  return async (input: any) => {
    let value = input
    for (const fn of fns)
      value = await fn(value)
    return value
  }
}
