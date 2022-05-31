import { createContext } from '../internal/context'
import { SwaggerSourceParameter } from '../_types'

describe('@hairy/swagger:parseParameter', () => {
  const context = createContext({ definitions: [] })
  const parseParameter = context.parseParameter
  const extendsSchema = (type: SwaggerSourceParameter['in'], schema: SwaggerSourceParameter['schema']) => {
    return { in: type, schema, description: '', name: '', required: false }
  }

  test('in body', () => {
    expect(parseParameter(extendsSchema('body', { $ref: 'ResAfc' }), { method: 'Post' })).toEqual('ResAfc')
    expect(parseParameter(extendsSchema('body', { type: 'integer' }), { method: 'Post' })).toEqual('number')
  })

  test('in query', () => {
    const value = parseParameter(
      {
        in: 'query',
        description: '',
        name: 'Qrr',
        required: true
      },
      {
        method: 'POST'
      }
    )
  })
})
