import { WechatJssdk } from '.'

describe('WechatJssdk', () => {
  // Reset JSDOM after each test
  afterEach(() => {
    document.querySelectorAll('html')[0].innerHTML =
      '<html><head></head><body>Empty DOM</body></html>'
  })

  it('base connect', async () => {
    const wechatJssdk = new WechatJssdk({
      immediate: false,
      requestConfig: async () => {
        return { appId: '', jsApiList: [], nonceStr: '', signature: '', timestamp: 13_123 }
      }
    })
    wechatJssdk.config()
  })
})
