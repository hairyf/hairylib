import { ref } from 'vue-demi'
import { useProvideThemeEditor } from '../utils'
import { DeepPartial } from '@hairy/core'

describe('useProvideThemeEditor', () => {
  it('bind', () => {
    const theme = ref({
      layout: { slider: { textColor: 'red', bgColor: '' } }
    })
    const editTheme = ref<DeepPartial<typeof theme.value>>({})
    const deepThemeConfig = useProvideThemeEditor(theme, editTheme)
    deepThemeConfig['layout'][0].value = '#ffffff'
    expect(editTheme.value?.layout?.slider?.textColor).toBe('#ffffff')
    deepThemeConfig['layout'][0].value = 'red'
    expect(editTheme.value?.layout?.slider?.textColor).toBe('red')
  })
})
