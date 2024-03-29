# Documents system

一个好用的技术文档系统，不单单方便文档查阅者、以及还要方便文档编写者。

文档系统的搭建，不仅仅要从这两个角度同时出发，同时还要具有一定的开发与设计能力。

> 从文档编写者的角度

- 不需要太过于关心导航结构
- 提供多种辅助文档开发的工作
- 不需要编写数据源、更新日期、贡献者
- 不需要关心文档编译部分

> 从文档查阅者的角度

- 良好的导航结构，方便查阅类型
- 能够查看 Api 的 Type Declarations
- 存在真实案例、代码块、可复制代码
- 能有明确的数据源（git file 地址）
- 能有明确的更新日期、贡献人
- 能够查看历史版本、更新日志
- 良好的阅读体验、写作风格（[中文技术文档写作风格指南](https://zh-style-guide.readthedocs.io/zh_CN/latest/%E8%AF%AD%E8%A8%80%E9%A3%8E%E6%A0%BC/%E7%AE%80%E6%B4%81%E6%B8%85%E6%99%B0.html)）

## 技术文档系统搭建

既要满足文档查阅者的需求、还要满足编写者的需求是技术文档系统搭建围绕的中心。

即包含一下内容，但又不局限于以下内容：

- Documents 文档收集组合部分
- Type Declarations 自动生成
- Markdown 引用 Demo 组件
- 历史版本文档组成部分
- 生成更新时间、日志、文件源
- Documents 的开发命令和打包
  > 文档编译工具(cherry-doc、vitepress、博客园、vuepress、hexo)
- 自动化 CI 文档部署
  > gitlab ci、github actions、jenkins

## 文档驱动开发

「代码未动，文档先行」这可以说是文档驱动API设计的核心了，在开始编写API代码之前，先将API设计好，然后输出成API文档。

在设计的过程中，实际上是对API细节的梳理，一个功能或者一组功能，需要用到哪些API，这些API都需要哪些请求参数和返回参数。当你将这些API输出成文档后，基本上大致的结构已经确定下来，不像之前只是脑子里有个粗糙的构思。

接下来的事情就是和API相关的开发者和调用者进行文档的评审，和大家一起确认这些API是否都合理，看有没有遗漏的，同时也是让相关人员都清楚各系统模块间的调用逻辑。当文档评审通过后，代表大家对API的设计达成了统一，这时候每个人就可以按照文档开始各自的工作了。
