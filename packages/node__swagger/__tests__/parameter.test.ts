import { createContext } from '../internal/context'
import { SwaggerSourceParameter } from '../_types'

describe('@hairy/swagger:parseParameter', () => {
  const context = createContext({ definitions: [] })
  const parseParameter = context.parseParameter

  it('in body', () => {
    const extendsSchema = (type: SwaggerSourceParameter['in'], schema: SwaggerSourceParameter['schema']) => {
      return { in: type, schema, description: '', name: '', required: false }
    }
    expect(parseParameter(extendsSchema('body', { $ref: 'ResAfc' }), { method: 'Post' })).toEqual('ResAfc')
    expect(parseParameter(extendsSchema('body', { type: 'integer' }), { method: 'Post' })).toEqual('number')
  })

  it('in query', () => {
    expect(
      parseParameter(
        {
          in: 'query',
          description: '',
          name: 'qrr',
          required: true,
          type: 'integer'
        },
        {
          method: 'POST'
        }
      )
    ).toEqual({
      name: 'qrr',
      required: true,
      value: 'number',
      description: ''
    })

    expect(
      parseParameter(
        {
          in: 'query',
          description: '',
          name: 'qrr',
          required: true,
          schema: {
            type: 'object',
            properties: {
              aaa: { required: false, type: 'integer' },
              bbb: { required: false, type: 'integer' }
            }
          }
        },
        {
          method: 'POST'
        }
      )
    ).toEqual({
      name: 'qrr',
      required: true,
      value: 'PostQrrQuery',
      description: ''
    })

    expect(
      parseParameter(
        {
          in: 'query',
          description: '',
          name: 'qrr',
          required: true,
          type: 'array'
        },
        {
          method: 'POST'
        }
      )
    ).toEqual({
      name: 'qrr',
      description: '?qrr=a,b,c | ?qrr=a&qrr=b',
      required: true,
      value: 'string | string[]'
    })
  })

  it('in fromData', () => {
    expect(
      parseParameter(
        {
          in: 'formData',
          name: 'bbb'
        },
        {
          method: 'POST'
        }
      )
    ).toEqual('FormData')
  })

  // TODO: fromData Field
  it.skip('in fromData', () => {
    expect(
      parseParameter(
        {
          in: 'formData',
          name: 'bbb',
          value: 'string'
        },
        {
          method: 'POST'
        }
      )
    ).toEqual({
      name: 'bbb',
      description: '',
      required: false,
      value: 'string'
    })
  })
})
