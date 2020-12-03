import caesar from './caesar'

test('shift by 13', () => {
    expect(caesar('Hello dear Friends, how are you zzzz so sleepy!', 13)).toBe('Uryyb qrne Sevraqf, ubj ner lbh mmmm fb fyrrcl!')
  })


  test('shift by 2', () => {
    expect(caesar('Testing shift', 2)).toBe('Vguvkpi ujkhv')
  })

  test('negative shift by -45', () => {
    expect(caesar('Why is so heavy, zzzzz', -45)).toBe('Dof pz zv olhcf, ggggg')
  })