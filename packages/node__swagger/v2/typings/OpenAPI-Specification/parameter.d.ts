import { Schema } from './schema'

export interface Parameter {
  name: string
  in: 'body' | 'header' | 'query' | 'path' | 'formData'
  type?: string
  description?: string
  required?: boolean
  schema?: Schema
}
