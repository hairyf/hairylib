import { loadConfigFromFile } from '.'

describe('@hairy/node:loadConfigFromFile', () => {
  const TEST_CONFIG = { test: 'test' }
  const base = __dirname + '/mocks'
  test('cjs', async () => {
    const { config } = await loadConfigFromFile('mock-1', base)
    expect(config).toEqual(TEST_CONFIG)
  })
  test('json', async () => {
    const { config } = await loadConfigFromFile('mock-2', base)
    expect(config).toEqual(TEST_CONFIG)
  })
  test('ts', async () => {
    const { config } = await loadConfigFromFile('mock-3', base)
    expect(config).toEqual(TEST_CONFIG)
  })
  test('ts.ext', async () => {
    const { config } = await loadConfigFromFile('mock-3.ts', base)
    expect(config).toEqual(TEST_CONFIG)
  })
})
