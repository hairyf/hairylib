import { execSync } from 'child_process'
import path from 'path'
import { packages } from '../meta/packages'
import consola from 'consola'

execSync('yarn build', { stdio: 'inherit' })

for (const { name, build } of packages) {
  if (build === false) continue
  consola.info(`Publish @tuimao/${name}`)
  execSync('npm publish --access public', {
    stdio: 'inherit',
    cwd: path.join('packages', name, 'dist')
  })
  consola.success(`Published @tuimao/${name}`)
}
