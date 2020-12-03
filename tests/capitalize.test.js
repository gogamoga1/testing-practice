import capitalize from './capitalize'



test('first character is upperCased', () => {
    expect(capitalize('hello world')).toBe('Hello world')
  })
  