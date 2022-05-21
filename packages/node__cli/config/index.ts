import fs from 'fs-extra'

// eslint-disable-next-line import/no-mutable-exports
let version = '--- development ---'
try {
  version = fs.readJSONSync('package.json').version
} catch {}

export { version }
