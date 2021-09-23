import { packages } from '../meta/packages'
import { updateImport, updatePackageJSON } from './utils'

const run = async () => {
  await updateImport(packages)
  await updatePackageJSON(packages)
}

run()
