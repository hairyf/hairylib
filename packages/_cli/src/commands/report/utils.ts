/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-12 10:30:06
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-13 18:54:27
 */

import dayjs from 'dayjs'

const DEFAULT_PREFIXS = ['upd', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']

export const getCommitlintPrefixs = (file: string) => {
  const options = {
    read: false,
    config: {} as any
  }
  try {
    options.config = require(file)
    options.read = true
  } catch {}
  return DEFAULT_PREFIXS
}

interface DayColInfo {
  /** 标题信息 */
  title: string
  /** 提交体内容 */
  body: string[]
  /** 距离上次提交的时间 */
  duration: string
  /** 提交的时间 */
  time: number
  /** 问题与感悟 */
}

export const getTwoDaysWork = (logs: any[]) => {
  const todaySource = logs
    .filter((item) => /feat|docs|test/.test(item.subject))
    .map((item) => {
      const body: string[] = item.body.split('\n')
      return {
        title: item.subject.replace(/feat:|docs:|test:/, '').trim(),
        body,
        time: dayjs(item.committerDate).valueOf()
      }
    })
  const today: DayColInfo[] = todaySource
    .map((item, index) => {
      const laterTime = todaySource[index + 1]?.time
      const duration = item.time.valueOf() - (laterTime?.valueOf?.() || Infinity)
      return {
        ...item,
        duration: duration === -Infinity ? '' : dayjs.duration(duration).format('H.m') + 'h' || '-'
      }
    })
    .filter((item) => item.duration)
  const tomorrow = today.filter((item) => !item.body.includes('100%'))

  return [today, tomorrow]
}

interface FormatMdFileOptions {
  name: string
  speech: string
  today: DayColInfo[]
  tomorrow: DayColInfo[]
  problem: string[]
}
export const formatMdFile = (options: FormatMdFileOptions) => {
  const generateNote = (items: DayColInfo[]) => {
    return items
      .map((item) => {
        return `### ${item.title}\n` + `${item.body.join('\n')}` + `用时: ${item.duration}`
      })
      .join('\n')
  }
  const code = `\
## ${options.name}-${dayjs().format('YYYY/MM/DD')}

> ${options.speech}

## 今日问题与感悟
${options.problem.map((item, index) => `${index + 1}. ${item}`).join('\n')}



## 今日工作

${generateNote(options.today)}



## 明日工作

${generateNote(options.tomorrow)}
`

  return code
}
