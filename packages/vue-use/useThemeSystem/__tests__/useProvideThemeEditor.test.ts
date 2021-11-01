import { createThemeSystem } from '..'
import { useInjectedSetup } from '../../../.test'

describe('useOverridesEditor', () => {
  it('bind', () => {
    const { provideTheme, useThemeEditorConfig } = createThemeSystem({
      layout: { slider: { textColor: 'red', bgColor: '' } }
    })
    useInjectedSetup(
      () => {
        provideTheme()
      },
      () => {
        const { config, overrides } = useThemeEditorConfig()

        config['layout'][0].value = '#ffffff'
        expect(overrides.value?.layout?.slider?.textColor).toBe('#ffffff')
        config['layout'][0].value = 'red'
        expect(overrides.value?.layout?.slider?.textColor).toBe('red')

        provideTheme(overrides)
      }
    )
  })
})
