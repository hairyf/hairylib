type SchemaNumberType = 'integer' | 'long' | 'float' | 'byte' | 'TypesLong' | 'TypesString'
type SchemaStringType = 'byte' | 'binary' | 'date' | 'dateTime' | 'password'
type SchemaBooleanType = 'boolean'
type SchemaObjectType = 'object'

type SchemaType = SchemaNumberType | SchemaStringType | SchemaBooleanType | SchemaObjectType

export interface Schema {
  type?: SchemaType | SchemaType[]
  items?: Schema
  additionalProperties?: Schema
  originalRef?: string
  $ref?: string
  required?: boolean
  format?: string
  description?: string
  schema?: Schema
  properties?: Properties
  xml?: { wrapped?: boolean }
  enum?: string[]
}

export interface Properties {
  [name: string]: Schema
}
