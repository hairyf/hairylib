import type { JSX } from 'react'
import { createElement } from 'react'

// eslint-disable-next-line ts/no-unsafe-function-type
export type WrapperTag = keyof JSX.IntrinsicElements | Function

export type WrapperProps<As extends keyof JSX.IntrinsicElements | React.FC | unknown> =
  {
    /** @deprecated use `as` instead */
    tag?: As

    as?: As
  } &
  (As extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[As] : unknown) &
  (As extends React.FC<infer P> ? P : unknown)

export function wrapper(asChild: any, props: unknown, children?: React.ReactNode) {
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  return asChild ? createElement(asChild, props, children) : children
}
