import type { ComponentClass, FC, ReactNode } from 'react'
import { createElement, useMemo } from 'react'

export interface InjectComponent<P> {
  component: FC<P> | ComponentClass<P>
  props?: P
}

export interface InjectorProps {
  install: (FC<any> | InjectComponent<any> | ComponentClass<any>)[]
  children?: ReactNode
}

export function Injector(props: InjectorProps) {
  const installs: InjectComponent<any>[] = useMemo(
    () => props.install.map(repack).reverse(),
    [props.install],
  )
  return installs.reduce(
    (child, { component: Component, props }) => createElement(Component, props, child),
    props.children,
  )
}

function repack(c: any) {
  return c.component ? c : { component: c }
}
