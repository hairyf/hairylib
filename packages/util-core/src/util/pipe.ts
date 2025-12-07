/* eslint-disable jsdoc/check-param-names */

import { pPipe } from './pipe-promise'

/**
 * Performs function composition in LTR (Left To Right) direction.
 *
 * Our `pipe` and  `pipe.promise` implementation supports N arguments. But you can use only 10 in
 * TypeScript, because it doesn't support **Variadic Kinds** and we explicitly
 * have to define the type of all the possible usages as method overloads.
 *
 * @example pipe
 *
 * const normalizeWhiteSpaces = text => name.replace(/\s+/g, ' ').trim();
 *
 * const getInitials = pipe(
 *   normalizeWhiteSpaces,
 *   name => name.split(' ').map(name => name.charAt(0)),
 *   initials => initials.join('').toLocaleUpperCase()
 * );
 *
 * getInitials('Vitor Luiz Cavalcanti');
 * //=> "VLC"
 *
 * @param fn - An arity N function. Its result is the argument of next one.
 * @param fns - Functions of arity 1. Each one's result is next's argument.
 *
 * @example pipe.promise
 *
 * const addUnicorn = async string => `${string} Unicorn`;
 * const addRainbow = async string => `${string} Rainbow`;
 *
 * const pipeline = pipe.promise(addUnicorn, addRainbow);
 *
 * console.log(await pipeline('❤️'));
 * //=> '❤️ Unicorn Rainbow'
 * @param ...input - Iterated over sequentially when returned `function` is called.
 * @returns The `input` functions are applied from left to right.
 */
export function pipe<Args extends unknown[], T0>(...fns: [(...xs: Args) => T0]): (...xs: Args) => T0
export function pipe<Args extends unknown[], T0, T1>(...fns: [(...xs: Args) => T0, (x: T0) => T1]): (...xs: Args) => T1
export function pipe<Args extends unknown[], T0, T1, T2>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2]): (...xs: Args) => T2
export function pipe<Args extends unknown[], T0, T1, T2, T3>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3]): (...xs: Args) => T3
export function pipe<Args extends unknown[], T0, T1, T2, T3, T4>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4]): (...xs: Args) => T4
export function pipe<Args extends unknown[], T0, T1, T2, T3, T4, T5>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4, (x: T4) => T5]): (...xs: Args) => T5
export function pipe<Args extends unknown[], T0, T1, T2, T3, T4, T5, T6>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4, (x: T4) => T5, (x: T5) => T6]): (...xs: Args) => T6
export function pipe<Args extends unknown[], T0, T1, T2, T3, T4, T5, T6, T7>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4, (x: T4) => T5, (x: T5) => T6, (x: T6) => T7]): (...xs: Args) => T7
export function pipe<Args extends unknown[], T0, T1, T2, T3, T4, T5, T6, T7, T8>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4, (x: T4) => T5, (x: T5) => T6, (x: T6) => T7, (x: T7) => T8]): (...xs: Args) => T8
export function pipe<Args extends unknown[], T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4, (x: T4) => T5, (x: T5) => T6, (x: T6) => T7, (x: T7) => T8, (x: T8) => T9]): (...xs: Args) => T9
export function pipe(...fns: any[]) {
  return fns.reduce((v, f) => f(v))
}

pipe.promise = pPipe
