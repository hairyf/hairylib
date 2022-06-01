import { createContext } from '../internal/context'
import { ParsePropertiesOptions } from '../parser/properties'
import { SwaggerSourceProperties } from '../_types'

describe('@hairy/swagger:parseProperties', () => {
  const context = createContext({ definitions: [] })
  const parseProperties = context.parseProperties
  it('parse number', () => {
    expect(parseProperties({ type: 'integer' })).toEqual('number')
    expect(parseProperties({ type: 'long' })).toEqual('number')
    expect(parseProperties({ type: 'float' })).toEqual('number')
    expect(parseProperties({ type: 'double' })).toEqual('number')
  })
  it('parse string', () => {
    expect(parseProperties({ type: 'byte' })).toEqual('string')
    expect(parseProperties({ type: 'binary' })).toEqual('string')
    expect(parseProperties({ type: 'date' })).toEqual('string')
    expect(parseProperties({ type: 'dateTime' })).toEqual('string')
    expect(parseProperties({ type: 'password' })).toEqual('string')
  })
  it('parse boolean', () => {
    expect(parseProperties({ type: 'boolean' })).toEqual('boolean')
  })
  it('parse object(arbitrary)', () => {
    expect(parseProperties({ type: 'object' })).toEqual('Record<string, any>')
  })
  it('parse array(union type)', () => {
    expect(parseProperties({ type: ['integer', 'byte', 'boolean', 'object'] })).toEqual(
      'number | string | boolean | Record<string, any>'
    )
  })
  it('parse array(items)', () => {
    expect(parseProperties({ type: 'array', items: { type: 'integer' } })).toEqual('number[]')
  })
  it('parse object(detailed)', () => {
    const context = createContext({ definitions: [] })
    const parseProperties = context.parseProperties
    const propertie: SwaggerSourceProperties = {
      type: 'object',
      properties: {
        value1: { type: 'integer' },
        value2: { type: 'byte' },
        value3: {
          type: 'object',
          properties: {
            value4: {
              type: 'object',
              properties: { value5: { type: 'integer' } }
            }
          }
        }
      }
    }
    const options: ParsePropertiesOptions = {
      name: ['get', '', '/api/v3/account', '', 'params']
    }
    expect(parseProperties(propertie, options)).toEqual('GetApiV3AccountParams')
    expect(context.definitions[0]).toEqual({
      name: 'GetApiV3AccountParams',
      description: '',
      value: [
        {
          name: 'value1',
          value: 'number',
          required: false,
          description: ''
        },
        {
          name: 'value2',
          value: 'string',
          required: false,
          description: ''
        },
        {
          name: 'value3',
          value: '{ value4?: { value5?: number } }',
          required: false,
          description: ''
        }
      ]
    })
  })
  it('parse originalRef', () => {
    expect(parseProperties({ originalRef: 'TestRrr' })).toEqual('TestRrr')
  })
  it('parse $ref', () => {
    expect(parseProperties({ $ref: 'TestRrr/Def/ResAfc' })).toEqual('ResAfc')
  })
  it('parse additionalProperties', () => {
    expect(parseProperties({ additionalProperties: { type: 'integer' } })).toEqual('Record<string, number>')
    expect(
      parseProperties({
        additionalProperties: {
          type: 'object',
          properties: {
            value4: {
              type: 'object',
              properties: { value5: { type: 'integer' } }
            }
          }
        }
      })
    ).toEqual('Record<string, { value4?: { value5?: number } }>')
  })
})
