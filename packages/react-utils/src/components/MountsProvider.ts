import { createElement, useMemo } from 'react'
import type { ComponentClass, FC, ReactNode } from 'react'

export interface ComponentMetadata<P> {
  component: FC<P> | ComponentClass<P>
  props?: P
}

export interface MountsProviderProps {
  install: (FC<any> | ComponentMetadata<any> | ComponentClass<any>)[]
  children?: ReactNode
}

export function MountsProvider(props: MountsProviderProps) {
  const installs: ComponentMetadata<any>[] = useMemo(
    () =>
      props.install.map((c: any) => c.component ? c : { component: c }).reverse(),
    [props.install],
  )
  return installs.reduce(
    (child, { component: Component, props }) => createElement(Component, props, child),
    props.children,
  )
}
