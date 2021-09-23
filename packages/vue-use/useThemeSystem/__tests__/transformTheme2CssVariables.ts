import { transformTheme2CssVariables } from '../inside'
describe('transformTheme2CssVariables', () => {
  it('monolayer transform', () => {
    const themeOption = {
      Layout: { siderColor: '#001426' }
    }
    expect(transformTheme2CssVariables(themeOption)).toEqual({ 'layout-sider-color': '#001426' })
  })
  it('multi-storey transform', () => {
    const themeOption = {
      Layout: { Sider: { color: '#001426' } }
    }
    expect(transformTheme2CssVariables(themeOption)).toEqual({ 'layout-sider-color': '#001426' })
  })
})
