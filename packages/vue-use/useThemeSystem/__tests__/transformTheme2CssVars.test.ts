import { transformTheme2CssVars as transformTheme2CssVariables } from '../inside'
describe('transformTheme2CssVars', () => {
  it('monolayer transform', () => {
    const themeOption = {
      Layout: { SidebarColor: '#001426' }
    }
    expect(transformTheme2CssVariables(themeOption)).toEqual({ 'layout-sidebar-color': '#001426' })
  })
  it('multi-storey transform', () => {
    const themeOption = {
      Layout: { Sidebar: { color: '#001426' } }
    }
    expect(transformTheme2CssVariables(themeOption)).toEqual({ 'layout-sidebar-color': '#001426' })
  })
})
