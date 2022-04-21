#!/usr/bin/env node
import cac from 'cac'
import { actionBuilder } from '../commands/compile'
import { actionCreateTemplate } from '../commands/create'
import { actionCreateReport } from '../commands/report'
import { version } from '../config'

const cli = cac('templa-cli')

cli.command('create <app-name>', 'create project to app-name dir').action((output) => actionCreateTemplate(output))

cli
  .command('report', 'create daily or weekly message')
  .option('-i, --input <dir>', `bundle's entry`)
  .option('-o, --output <dir>', `bundle's output`)
  .option('-t, --title <title>', `report title`)
  .option('-a, --author <author>', `git logs author`)
  .action((options) => actionCreateReport(options))

cli
  .command('dev')
  .option('-i, --input <dir>', `Bundle's entry`)
  .option('-o, --output <dir>', `Bundle's output`)
  .option('-n, --not-type', `Do not export TypeScript declaration files`)
  .option('-m, --meta', `Contains meta information files such as package.json, README.md`)
  .action((options) => actionBuilder({ ...options, mode: 'development' }))
cli
  .command('build')
  .option('-i, --input <dir>', `bundle's entry`)
  .option('-o, --output <dir>', `bundle's output`)
  .option('-n, --not-type', `not build d.ts`)
  .option('-m, --meta', `Contains meta information files such as package.json, README.md`)
  .action((options) => actionBuilder({ ...options, mode: 'production' }))

cli.help()
cli.version(version)
cli.parse()
