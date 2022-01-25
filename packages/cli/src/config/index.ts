import fs from 'fs-extra'

let version = '--- development ---'
try {
  version = fs.readJSONSync('package.json').version
} catch {}

export { version }
