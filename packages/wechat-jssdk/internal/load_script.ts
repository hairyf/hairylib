import { noop } from '../../common/utils'

export interface LoadScriptOptions {
  /**
   * @param waitForScriptLoad Promise 是否应该在 <script> 属性发出“load”事件后触发，还是在将其附加到 DOM 后立即触发。
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
export const loadScript = (
  src: string,
  onLoaded: (el: HTMLScriptElement) => void = noop,
  options: LoadScriptOptions = {}
): Promise<HTMLScriptElement> => {
  const {
    type = 'text/javascript',
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    waitForScriptLoad = true
  } = options

  return new Promise((resolve, reject) => {
    // Local variable defining if the <script> tag should be appended or not.
    let shouldAppend = false

    let el = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement

    // Script tag not found, preparing the element for appending
    if (!el) {
      el = document.createElement('script')
      el.type = type
      el.async = async
      el.src = src

      // Optional attributes
      if (defer) el.defer = defer
      if (crossOrigin) el.crossOrigin = crossOrigin
      if (noModule) el.noModule = noModule
      if (referrerPolicy) el.referrerPolicy = referrerPolicy

      // Enables shouldAppend
      shouldAppend = true
    }
    // Script tag already exists, resolve the loading Promise with it.
    else if (el.hasAttribute('data-loaded')) {
      resolve(el)
    }

    // Event listeners
    el.addEventListener('error', (event) => reject(event))
    el.addEventListener('abort', (event) => reject(event))
    el.addEventListener('load', () => {
      el.setAttribute('data-loaded', 'true')
      onLoaded(el)
      resolve(el)
    })

    // Append the <script> tag to head.
    if (shouldAppend) {
      el = document.head.appendChild(el)
    }

    // If script load awaiting isn't needed, we can resolve the Promise.
    if (!waitForScriptLoad) {
      resolve(el)
    }
  })
}
