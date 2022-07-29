/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable vue/one-component-per-file */
import { ref, defineComponent, h } from 'vue'
import { mount } from '../.test/mount'
import { createInjectionContext } from '.'

const InjectionContext = createInjectionContext('test', (initialValue: number) => {
  const count = ref(initialValue)
  return count
})

const ChildComponent = defineComponent({
  setup() {
    const count = InjectionContext.inject()
    expect(count.value).toBe(0)

    return () => h('div')
  }
})

const RootComponent = defineComponent({
  setup() {
    InjectionContext.provide(0)
    return () => h(ChildComponent)
  }
})

describe('computedWithControl', () => {
  it('should work', () => {
    mount(RootComponent)
  })
})
