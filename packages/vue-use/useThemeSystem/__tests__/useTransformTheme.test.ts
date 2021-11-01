import { createThemeSystem } from '..'
import { useInjectedSetup } from '../../../.test'

describe('useTransformTheme', () => {
  const { useTransformTheme, provideTheme } = createThemeSystem({
    layout: { slider: { textColor: 'red', bgColor: '' } }
  })
  it('transform all', () => {
    useInjectedSetup(
      () => {
        provideTheme()
      },
      () => {
        const cssVariables = useTransformTheme()
        expect(cssVariables.value).toEqual({
          'layout-slider-text-color': 'red',
          'layout-slider-bg-color': ''
        })
      }
    )
  })
  it('transform deep path', () => {
    useInjectedSetup(
      () => {
        provideTheme()
      },
      () => {
        const cssVariables = useTransformTheme('layout.slider.textColor')
        expect(cssVariables.value).toEqual({
          'layout-slider-text-color': 'red'
        })
      }
    )
  })
})
