/* eslint-disable ts/no-use-before-define */
import type { DefineComponent, TransitionProps } from 'vue-demi'
import CssRender from 'css-render'
import { defineComponent, h, Transition } from 'vue-demi'

const { c } = CssRender()

export const CollapseTransition: DefineComponent = defineComponent({
  name: 'CollapseTransition',
  setup(_, { slots }) {
    const on = {
      onBeforeEnter(el: HTMLDivElement) {
        el.classList.add('collapse-transition')
        if (!el.dataset)
          (el.dataset as any) = {}

        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom

        el.style.height = '0'
        el.style.paddingTop = '0'
        el.style.paddingBottom = '0'
      },
      onEnter(el: HTMLDivElement) {
        el.dataset.oldOverflow = el.style.overflow
        if (el.scrollHeight !== 0) {
          el.style.height = `${el.scrollHeight}px`
          el.style.paddingTop = el.dataset.oldPaddingTop || '0'
          el.style.paddingBottom = el.dataset.oldPaddingBottom || '0'
        }
        else {
          el.style.height = ''
          el.style.paddingTop = el.dataset.oldPaddingTop || '0'
          el.style.paddingBottom = el.dataset.oldPaddingBottom || '0'
        }

        el.style.overflow = 'hidden'
      },
      onAfterEnter(el: HTMLDivElement) {
        // for safari: remove class then reset height is necessary
        el.classList.remove('collapse-transition')
        el.style.height = ''
        el.style.overflow = el.dataset.oldOverflow || '0'
      },

      onBeforeLeave(el: HTMLDivElement) {
        if (!el.dataset)
          (el.dataset as any) = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.dataset.oldOverflow = el.style.overflow

        el.style.height = `${el.scrollHeight}px`
        el.style.overflow = 'hidden'
      },

      onLeave(el: HTMLDivElement) {
        if (el.scrollHeight !== 0) {
          // for safari: add class after set height, or it will jump to zero height suddenly, weired
          el.classList.add('collapse-transition')
          // fix #968 collapse animation failure.
          // in vue3.0.4, transitionProperty is set 'none' to avoid 'v-leave-from' issue
          el.style.transitionProperty = 'height'
          el.style.height = '0'
          el.style.paddingTop = '0'
          el.style.paddingBottom = '0'
        }
      },

      onAfterLeave(el: HTMLDivElement) {
        el.classList.remove('collapse-transition')
        el.style.height = ''
        el.style.overflow = el.dataset.oldOverflow || '0'
        el.style.paddingTop = el.dataset.oldPaddingTop || '0'
        el.style.paddingBottom = el.dataset.oldPaddingBottom || '0'
      },
    }
    style.mount()
    return () => h(Transition, on as unknown as TransitionProps, slots)
  },
})

const style = c('.collapse-transition', {
  transition: '0.2s height ease-in-out, 0.2s padding-top ease-in-out,0.2s padding-bottom ease-in-out',
})
