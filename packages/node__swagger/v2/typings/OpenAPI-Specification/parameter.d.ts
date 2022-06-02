import { Schema } from './schema'

export interface Parameter {
  name: string
  in: 'body' | 'header' | 'query' | 'path' | 'formData'
  type?: Schema['type']
  description?: string
  required?: boolean
  schema?: Schema
}
