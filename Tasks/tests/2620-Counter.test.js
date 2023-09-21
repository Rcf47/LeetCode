import { createCounter } from './2620-Counter.js'

describe('Count', () => {

  let count
  beforeAll(async () => {
    count = createCounter(10)
  })
  test('with 10', () => {
    expect((count())).toBe(10)
  })

  test('with 11', () => {
    expect((count())).toBe(11)
  })

  test('with 12', () => {
    expect((count())).toBe(12)
  })
})
