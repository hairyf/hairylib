import { hexToRgb } from '../src'

describe('@hairy/color:hexToRgb', () => {
  test('Converting hex code to RGB - object // 3 digit', () => {
    expect(hexToRgb('#01C')).toEqual({ r: 0, g: 17, b: 204 })
    expect(hexToRgb('#F52')).toEqual({ r: 255, g: 85, b: 34 })
    expect(hexToRgb('#DEF')).toEqual({ r: 221, g: 238, b: 255 })
    expect(hexToRgb('#940')).toEqual({ r: 153, g: 68, b: 0 })
    expect(hexToRgb('123')).toEqual({ r: 17, g: 34, b: 51 })
    expect(hexToRgb('C7D')).toEqual({ r: 204, g: 119, b: 221 })
    expect(hexToRgb('EDC')).toEqual({ r: 238, g: 221, b: 204 })
    // expect(hexToRgb('0xa_51')).toEqual({ r: 170, g: 85, b: 17 })
    // expect(hexToRgb('0xb_a7')).toEqual({ r: 187, g: 170, b: 119 })
  })

  test('Converting hex code to RGB - object // 6 digit', () => {
    expect(hexToRgb('#AC5A62')).toEqual({ r: 172, g: 90, b: 98 })
    expect(hexToRgb('#123456')).toEqual({ r: 18, g: 52, b: 86 })
    expect(hexToRgb('#9CF055')).toEqual({ r: 156, g: 240, b: 85 })
    expect(hexToRgb('D42AAA')).toEqual({ r: 212, g: 42, b: 170 })

    expect(hexToRgb('0F2F4F')).toEqual({ r: 15, g: 47, b: 79 })
    expect(hexToRgb('2C4C6B')).toEqual({ r: 44, g: 76, b: 107 })
    expect(hexToRgb('FFFFFF')).toEqual({ r: 255, g: 255, b: 255 })

    // expect(hexToRgb('0x56_ee_ff')).toEqual({ r: 86, g: 238, b: 255 })
    // expect(hexToRgb('0x44_56_ff')).toEqual({ r: 68, g: 86, b: 255 })
  })
})
