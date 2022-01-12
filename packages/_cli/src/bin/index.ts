#!/usr/bin/env node
import cac from 'cac'
import { actionBuilder } from '../commands/compile'
import { actionCreateTemplate } from '../commands/create'
import { actionCreateReport } from '../commands/report'
import { version } from '../config'

const cli = cac('templa-cli')

cli
  .command('create <app-name>', 'create project to app-name dir')
  .action((output) => actionCreateTemplate(output))

cli
  .command('report', 'create daily or weekly message')
  .option('-i, --input <dir>', `bundle's entry`)
  .option('-o, --output <dir>', `bundle's output`)
  .action((options) => actionCreateReport(options))

cli
  .command('dev')
  .option('-i, --input <dir>', `bundle's entry`)
  .option('-o, --output <dir>', `bundle's output`)
  .option('-n, --not-type', `not build d.ts`)
  .action((options) => actionBuilder({ ...options, mode: 'development' }))
cli
  .command('build')
  .option('-i, --input <dir>', `bundle's entry`)
  .option('-o, --output <dir>', `bundle's output`)
  .option('-ut, --un-type', `not build d.ts`)
  .option('-n, --not-type', `not build d.ts`)
  .action((options) => actionBuilder({ ...options, mode: 'production' }))

cli.help()
cli.version(version)
cli.parse()
