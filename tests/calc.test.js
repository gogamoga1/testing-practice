import calc from './calc'

test('add operator', () => {
    expect(calc.add(5,3)).toBe(8)
  })
  

  test('sub operator', () => {
    expect(calc.sub(6,7)).toBe(-1)
  })

  test('mult operator', () => {
    expect(calc.mult(6,0)).toBe(0)
  })

  test('divide operator', () => {
    expect(calc.div(8,2)).toBe(4)
  })
  test('divide operator by 0', () => {
    expect(calc.div(8,0)).toBe(Infinity)
  })