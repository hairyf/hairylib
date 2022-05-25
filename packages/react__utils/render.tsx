import ReactDOM from 'react-dom'
import React from 'react'

export interface RenderInstanceOptions {
  root?: HTMLElement
}
export const renderInstance = (Component: any, props?: any, options: RenderInstanceOptions = {}) => {
  const container = document.createElement('div')

  const vanish = () => {
    ReactDOM.unmountComponentAtNode(container)
    container.parentNode?.removeChild(container)
  }

  // @ts-ignore
  ReactDOM.render(<Component {...props} />, options.root || document.body)

  return { vanish }
}
