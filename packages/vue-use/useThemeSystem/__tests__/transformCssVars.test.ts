import { transformTheme2CssVars } from '../inside'
describe('transformTheme2CssVars', () => {
  it('monolayer transform', () => {
    const themeOption = {
      Layout: { siderColor: '#001426' }
    }
    expect(transformTheme2CssVars(themeOption)).toEqual({ 'layout-sider-color': '#001426' })
  })
  it('multi-storey transform', () => {
    const themeOption = {
      Layout: { Sider: { color: '#001426' } }
    }
    expect(transformTheme2CssVars(themeOption)).toEqual({ 'layout-sider-color': '#001426' })
  })
})
