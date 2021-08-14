/**
 * 该命令已被弃用，使用 lerna --contents 进行发布&打包
 */
import { execSync } from 'child_process'
import path from 'path'
import { packages } from '../meta/packages'
import consola from 'consola'
import execa from 'execa'

execSync('yarn build', { stdio: 'inherit' })

for (const { name, build } of packages) {
  if (build === false) continue
  try {
    execa.sync('yarn', ['publish', '--access', 'public'], {
      stdio: 'inherit',
      cwd: path.join('packages', name, 'dist')
    })
  } catch (error) {
    console.warn(JSON.stringify(error))
  }
  consola.success(`Published @tuimao/${name}`)
}
