import { WechatJssdk } from "."

describe('WechatJssdk', () => {
  // Reset JSDOM after each test
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML
      = '<html><head></head><body>Empty DOM</body></html>'
  })

  it('base connect', async () => {
    const wechatJssdk = new WechatJssdk({
      env: 'stage',
      immediate: false,
    })
    wechatJssdk.config()
  })
})