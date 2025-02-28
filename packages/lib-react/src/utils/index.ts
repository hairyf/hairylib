/* eslint-disable prefer-spread */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prefer-rest-params */

const hasOwn = {}.hasOwnProperty
export type Value = string | boolean | undefined | null
export type Mapping = Record<string, any>
export interface ArgumentArray extends Array<Argument> {}
export interface ReadonlyArgumentArray extends ReadonlyArray<Argument> {}
export type Argument = Value | Mapping | ArgumentArray | ReadonlyArgumentArray

/**
 * A simple JavaScript utility for conditionally joining classNames together.
 */
export function cls(...args: ArgumentArray): string {
  let classes = ''

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i]
    if (arg)
      classes = appendClass(classes, parseValue(arg))
  }

  return classes
}

function parseValue(arg: any) {
  if (typeof arg === 'string')
    return arg
  if (typeof arg !== 'object')
    return ''
  if (Array.isArray(arg))
    return cls.apply(null, arg)
  if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]'))
    return cls.toString()
  let classes = ''
  for (const key in arg) {
    if (hasOwn.call(arg, key) && arg[key])
      classes = appendClass(classes, key)
  }
  return classes
}

function appendClass(value: any, newClass: any) {
  if (!newClass)
    return value

  return value ? (`${value} ${newClass}`) : newClass
}
