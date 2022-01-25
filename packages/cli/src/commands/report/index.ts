/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-12 09:34:14
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-21 13:15:01
 */
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import gitlog from 'gitlog'
import { getVerse } from './speech'
import { formatMdFile, getTwoDaysWork } from './utils'
import fs from 'fs-extra'
import path from 'path'
dayjs.extend(duration)

export interface ActionReportOptions {
  input?: string
  output?: string
  title?: string
  author?: string
}
export const actionCreateReport = async (options?: ActionReportOptions) => {
  const { input = process.cwd(), output = process.cwd(), title, author } = options

  const logs = gitlog({
    repo: input,
    author,
    fields: ['subject', 'authorName', 'committerDate', 'committerDateRel', 'body'],
    number: 30
  })
  const name = `${title || ''}-${dayjs().format('YYYY/MM/DD')}`
  const speech = await getVerse()
  const [today, tomorrow] = getTwoDaysWork(logs)
  const problem = logs
    .filter((item) => /chore|fix|test/.test(item.subject))
    .map((item) => item.subject.replace(/chore:|fix:/, '').trim())
  const code = formatMdFile({ name, speech, today, tomorrow, problem })

  const filePath = path.join(output, `report-${dayjs().format('YYYY-MM-DD')}.txt`)
  await fs.writeFile(filePath, code, { flag: 'w' })
  return { file: filePath }
}
