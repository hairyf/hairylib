import { createElement, useMemo } from 'react'
import type { ComponentClass, FC, ReactNode } from 'react'

type Provider = [FC<any> | ComponentClass<any>, any]

export interface ProvidersProps {
  value: (Provider | FC<any> | ComponentClass<any>)[]
  children?: ReactNode
}

export function Providers(props: ProvidersProps) {
  const installs = useMemo(() =>
    props.value.map((v: any) => Array.isArray(v) ? v : [v, {}]).reverse(), [props.value]) as Provider[]
  return installs.reduce(
    (child, [Component, props]) => createElement(Component, props, child),
    props.children,
  )
}
