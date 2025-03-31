import type { JSX } from 'react'
import { createElement } from 'react'

export type WrapperProps<K extends keyof JSX.IntrinsicElements | unknown, P = unknown> =
  { tag?: K | React.FC<P> } &
  (K extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[K] : unknown) &
  P

export function wrapper(tag: any, props: unknown, children?: React.ReactNode) {
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  return tag ? createElement(tag, props, children) : children
}
