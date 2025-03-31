import type { JSX } from 'react'
import { createElement } from 'react'

// eslint-disable-next-line ts/no-unsafe-function-type
export type WrapperTag = keyof JSX.IntrinsicElements | Function

export type WrapperProps<Kag extends keyof JSX.IntrinsicElements | React.FC | unknown> =
  { tag?: Kag } &
  (Kag extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[Kag] : unknown) &
  (Kag extends React.FC<infer P> ? P : unknown)

export function wrapper(tag: any, props: unknown, children?: React.ReactNode) {
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  return tag ? createElement(tag, props, children) : children
}
