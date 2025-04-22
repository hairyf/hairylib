/* eslint-disable jsdoc/check-param-names */
import { pCompose } from './compose-promise'

type Fn<V, R> = (x: V) => R
// @ts-expect-error T is an array :troll:
type Q<T, V> = (...args: T) => V
/**
 * Performs function composition in RTL (Right To Left) direction.
 *
 * Our `compose` and `compose.promise` implementation supports N arguments. But you can use only 10 in
 * TypeScript, because it doesn't support **Variadic Kinds** and we explicitly
 * have to define the type of all the possible usages as method overloads.
 *
 * @example
 * const normalizeWhiteSpaces = text => name.replace(/\s+/g, ' ').trim();
 *
 * const getInitials = compose(
 *   initials => initials.join('').toLocaleUpperCase(),
 *   name => name.split(' ').map(name => name.charAt(0)),
 *   normalizeWhiteSpaces
 * );
 *
 * getInitials('Vitor Luiz Cavalcanti');
 * //=> "VLC"
 *
 * @param fn - An arity 1 function, except the last one which can have arity N.
 * @param fns - Functions of arity 1. Each one's result is next's argument.
 *
 * @example
 *
 * const addUnicorn = async string => `${string} Unicorn`;
 * const addRainbow = async string => `${string} Rainbow`;
 *
 * const pipeline = compose.promise(addRainbow, addUnicorn);
 *
 * console.log(await pipeline('❤️'));
 * //=> '❤️ Unicorn Rainbow'
 * @param ...fns - Iterated over sequentially when returned `function` is called.
 * @returns The `fns` functions are applied from right to left.
 */
export function compose<T, V0, V1>(fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V1>
export function compose<T, V0, V1, V2>(fn2: Fn<V1, V2>, fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V2>
export function compose<T, V0, V1, V2, V3>(fn3: Fn<V2, V3>, fn2: Fn<V1, V2>, fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V3>
export function compose<T, V0, V1, V2, V3, V4>(fn4: Fn<V3, V4>, fn3: Fn<V2, V3>, fn2: Fn<V1, V2>, fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V4>
export function compose<T, V0, V1, V2, V3, V4, V5>(fn5: Fn<V4, V5>, fn4: Fn<V3, V4>, fn3: Fn<V2, V3>, fn2: Fn<V1, V2>, fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V5>
export function compose<T, V0, V1, V2, V3, V4, V5, V6>(fn6: Fn<V5, V6>, fn5: Fn<V4, V5>, fn4: Fn<V3, V4>, fn3: Fn<V2, V3>, fn2: Fn<V1, V2>, fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V6>
export function compose<T, V0, V1, V2, V3, V4, V5, V6, V7>(fn7: Fn<V6, V7>, fn6: Fn<V5, V6>, fn5: Fn<V4, V5>, fn4: Fn<V3, V4>, fn3: Fn<V2, V3>, fn2: Fn<V1, V2>, fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V7>
export function compose<T, V0, V1, V2, V3, V4, V5, V6, V7, V8>(fn8: Fn<V7, V8>, fn7: Fn<V6, V7>, fn6: Fn<V5, V6>, fn5: Fn<V4, V5>, fn4: Fn<V3, V4>, fn3: Fn<V2, V3>, fn2: Fn<V1, V2>, fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V8>
export function compose<T, V0, V1, V2, V3, V4, V5, V6, V7, V8, V9>(fn9: Fn<V8, V9>, fn8: Fn<V7, V8>, fn7: Fn<V6, V7>, fn6: Fn<V5, V6>, fn5: Fn<V4, V5>, fn4: Fn<V3, V4>, fn3: Fn<V2, V3>, fn2: Fn<V1, V2>, fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V9>
export function compose<T, V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10>(fn10: Fn<V9, V10>, fn9: Fn<V8, V9>, fn8: Fn<V7, V8>, fn7: Fn<V6, V7>, fn6: Fn<V5, V6>, fn5: Fn<V4, V5>, fn4: Fn<V3, V4>, fn3: Fn<V2, V3>, fn2: Fn<V1, V2>, fn1: Fn<V0, V1>, fn0: Q<T, V0>): Q<T, V10>
export function compose(...fns: any[]) {
  const fn = fns.pop()
  return fns.reduceRight((v, f) => f(v), fn)
}

compose.promise = pCompose
