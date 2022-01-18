import fs from 'fs-extra'
import path from 'path'
fs.ensureDirSync(path.resolve(__dirname, '../dist/commands/create/template'))
fs.copy(
  path.resolve(__dirname, '../src/commands/create/template'),
  path.resolve(__dirname, '../dist/commands/create/template')
)
