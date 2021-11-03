import fs from 'fs-extra'
import path from 'path'
fs.ensureDirSync(path.resolve(__dirname, '../dist/create/template'))
fs.copy(
  path.resolve(__dirname, '../src/create/template'),
  path.resolve(__dirname, '../dist/create/template')
)
