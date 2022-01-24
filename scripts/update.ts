/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-22 20:10:35
 */
import { packages } from '../meta/packages'
import { updateImport, updateIndexes, updatePackageJSON } from './utils'

const run = async () => {
  await updateIndexes()
  await updateImport(packages)
  await updatePackageJSON(packages)
}

run()
