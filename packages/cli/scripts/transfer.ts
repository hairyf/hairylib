import fs from 'fs-extra'
import path from 'path'
fs.ensureDirSync(path.resolve(__dirname, '../dist/template'))
fs.copy(path.resolve(__dirname, '../libs/template'), path.resolve(__dirname, '../dist/template'))
