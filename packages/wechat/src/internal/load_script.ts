import { noop } from '@hairy/utils'

export interface LoadScriptOptions {
  /**
   * @param waitForScriptLoad Should Promise be triggered after the <script> attribute issues a `load` event, or immediately after attaching it to DOM.
   * @returns Promise<HTMLScriptElement>
   */
  waitForScriptLoad?: boolean
  async?: boolean
  type?: string
  crossOrigin?: 'anonymous' | 'use-credentials'
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
  noModule?: boolean
  defer?: boolean
}
export function loadScript(source: string, onLoaded: (element: HTMLScriptElement) => void = noop, options: LoadScriptOptions = {}): Promise<HTMLScriptElement> {
  const {
    type = 'text/javascript',
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    waitForScriptLoad = true,
  } = options

  return new Promise((resolve, reject) => {
    // Local variable defining if the <script> tag should be appended or not.
    let shouldAppend = false

    let element = document.querySelector(`script[src="${source}"]`) as HTMLScriptElement

    // Script tag not found, preparing the element for appending
    if (!element) {
      element = document.createElement('script')
      element.type = type
      element.async = async
      element.src = source

      // Optional attributes
      if (defer)
        element.defer = defer
      if (crossOrigin)
        element.crossOrigin = crossOrigin
      if (noModule)
        element.noModule = noModule
      if (referrerPolicy)
        element.referrerPolicy = referrerPolicy

      // Enables shouldAppend
      shouldAppend = true
    }
    // Script tag already exists, resolve the loading Promise with it.
    else if (Object.hasOwn(element.dataset, 'loaded')) {
      resolve(element)
    }

    // Event listeners
    element.addEventListener('error', event => reject(event))
    element.addEventListener('abort', event => reject(event))
    element.addEventListener('load', () => {
      element.dataset.loaded = 'true'
      onLoaded(element)
      resolve(element)
    })

    // Append the <script> tag to head.
    if (shouldAppend)

      element = document.head.appendChild(element)

    // If script load awaiting isn't needed, we can resolve the Promise.
    if (!waitForScriptLoad)
      resolve(element)
  })
}
