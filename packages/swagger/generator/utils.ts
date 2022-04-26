import { SwaggerGenerateConfig } from '.'

export const spliceHeaderCode = (config: SwaggerGenerateConfig) => {
  const { ast, build } = config
  return `
  /* eslint-disable */

  /**
   * @swagger ${ast.info.swaggerVersion}
   * @description ${ast.info.description}
   * @version ${ast.info.apiVersion}
   * @title ${ast.info.title}
   * @basePath ${ast.info.basePath}
   * @see ${build.uri}
   * @author hairy
   * @throws 🈲 > 禁止手动修改
   */
  `
}
