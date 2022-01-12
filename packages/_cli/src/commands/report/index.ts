/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-12 09:34:14
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-12 11:37:35
 */
import gitlog, { GitlogOptions } from 'gitlog'
import path from 'path'
import { getVerse } from './speech'
import { getCommitlintEnum } from './utils'
export interface ActionReportOptions {
  input?: string
  output?: string
  name?: string
}

export const actionCreateReport = async (options?: ActionReportOptions) => {
  const { input = process.cwd(), output = '' } = options

  // 获取存在的 commitlint 信息
  const typeEnum = getCommitlintEnum(path.join(input, 'commitlint.config.js'))
  const logs = gitlog({
    repo: input,
    author: 'wuweijian',
    fields: ['subject', 'authorName', 'committerDate', 'committerDateRel']
  })

  const mock = {
    // 明言明语，古诗
    speech: ' 看不是雪无香，天风吹得香零落。',
    // 今日问题: 标记提交(chore, fix)
    problem: [
      '表格样式在端中出现异常，需使用 group 分组修复',
      '样式还原进度 80%，剩余订单页未修复',
      '菜单管理正常开发，还未进入提测'
    ],
    // 今日工作: 标记提交(feat, docs, test)
    today: [
      {
        title: '【需求开发】菜单管理',
        content: '完成新增后续需求',
        progress: '100%',
        time: '4h'
      },
      {
        title: '【需求开发】域名管理',
        content: '完成静态页面',
        progress: '100%',
        time: '3h'
      }
    ],
    // 明日工作: 标记今日工作进度未达到 100% 的提交
    tomorrow: [
      {
        title: '【需求开发】菜单管理',
        content: '完成新增后续需求',
        progress: '-',
        time: '4h'
      },
      {
        title: '【需求开发】域名管理',
        content: '完成静态页面',
        progress: '-',
        time: '3h'
      }
    ]
  }
}
