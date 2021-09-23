import { createThemeSystem } from '..'
import { useInjectedSetup } from '../../../.test'

describe('useTransformTheme', () => {
  const { useTransformTheme, useProvideTheme } = createThemeSystem({
    layout: { slider: { textColor: 'red', bgColor: '' } }
  })
  it('transform all', () => {
    useInjectedSetup(
      () => {
        useProvideTheme()
      },
      () => {
        const cssvars = useTransformTheme()
        expect(cssvars.value).toEqual({
          'layout-slider-text-color': 'red',
          'layout-slider-bg-color': ''
        })
      }
    )
  })
  it('transform deep path', () => {
    useInjectedSetup(
      () => {
        useProvideTheme()
      },
      () => {
        const cssvars = useTransformTheme('layout.slider.textColor')
        expect(cssvars.value).toEqual({
          'layout-slider-text-color': 'red'
        })
      }
    )
  })
})
