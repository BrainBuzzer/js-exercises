import { evenNumber } from './even-number-filter'

describe('evenNumber()', () => {
  test('blank array given', () => {
    expect(evenNumber([])).toEqual([])
  })

  test('all even numbers given', () => {
    expect(evenNumber([2, 4, 10, 134, 256, 212])).toEqual([2, 4, 10, 134, 256, 212])
  })

  test('all odd numbers given', () => {
    expect(evenNumber([1, 5, 13, 387, 67])).toEqual([])
  })

  test('mix of even and odd numbers given', () => {
    expect(evenNumber([1, 12, 5, 46, 13, 166, 387, 67])).toEqual([12, 46, 166])
  })
})
