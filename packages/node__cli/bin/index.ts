#!/usr/bin/env node
import cac from 'cac'
import { actionBuilder } from '../commands/compile'
import { actionCreateTemplate } from '../commands/create'
import { actionSwagger } from '../commands/swagger'
import { version } from '../config'

const cli = cac('hairy')

cli.command('create <app-name>', 'create project to app-name dir').action((output) => actionCreateTemplate(output))

cli
  .command('dev', 'Observe the file or dir Bundle output')
  .option('--input <dir/file>', `bundle's entry`)
  .option('--output <dir/file>', `bundle's output`)
  .option('--type', `build d.ts, but this slows down compilation`)
  .option('--logger', `print log during build`)
  .option('--meta', `Contains meta information files such as package.json, README.md`)
  .option('--ignore [source]', `Ignore partial files or folders for folder compilation`)
  .option('--esllpkg', `Esllpkg mode, will output .cjs .esm .iife .iife.min files`)
  .option('--globalName', `In IIFE mode, define the global name`)
  .option(
    '--pkgMode [mode]',
    `Which modules are output under esllpkg, all modules are output by default, with/separate`
  )
  .action((options) => actionBuilder({ ...options, mode: 'development' }))
cli
  .command('build', 'Build file or dir to output')
  .option('--input <dir/file>', `bundle's entry`)
  .option('--output <dir/file>', `bundle's output`)
  .option('--type', `build d.ts, but this slows down compilation`)
  .option('--logger', `print log during build`)
  .option('--meta', `Contains meta information files such as package.json, README.md`)
  .option('--ignore [source]', `Ignore partial files or folders for folder compilation`)
  .option('--esllpkg', `Esllpkg mode, will output .cjs .esm .iife .iife.min files`)
  .option('--globalName', `In IIFE mode, define the global name`)
  .option(
    '--pkgMode [mode]',
    `Which modules are output under esllpkg, all modules are output by default, with/separate`
  )
  .action((options) => actionBuilder({ ...options, mode: 'production' }))

cli.command('swagger', 'Generate TypeScript files from swagger service').action(actionSwagger)

cli.help()
cli.version(version)
cli.parse()
