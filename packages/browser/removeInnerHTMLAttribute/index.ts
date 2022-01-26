import { isArray } from 'lodash'

/**
 * 移除所有标签的一个或多个属性
 * @param html html string
 * @param attr attr string
 * @returns html
 */
export const removeInnerHTMLAttribute = (html: string, attribute: string | string[]) => {
  return (isArray(attribute) ? attribute : [attribute]).reduce(
    (total, attribute) => total.replace(new RegExp(`${attribute}=['"](.*?)['"]`, 'gis'), ''),
    html
  )
}
