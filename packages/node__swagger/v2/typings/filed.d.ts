export interface CommonFiled {
  name: string
  type: string
  required?: boolean
  description?: string
}
export type LiteralExpressionFiled = string | [string | '...', string]
