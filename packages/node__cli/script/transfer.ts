import path from 'path'
import fs from 'fs-extra'
fs.ensureDirSync(path.resolve(__dirname, '../dist/commands/create/template'))
fs.copy(
  path.resolve(__dirname, '../commands/create/template'),
  path.resolve(__dirname, '../dist/commands/create/template')
)
