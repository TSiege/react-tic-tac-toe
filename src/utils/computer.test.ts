import { getComputerMove } from './computer'

describe('getComputerMove', () => {
  describe('Easy Mode', () => {
    test('returns a valid move', () => {
      expect(getComputerMove({ board: ['', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'X'] })).toBe(0)
      expect(getComputerMove({ board: ['O', 'O', 'X', 'O', 'X', 'X', 'O', 'O', ''] })).toBe(8)
      expect(getComputerMove({ board: ['O', 'O', 'X', 'O', '', 'X', 'O', 'O', 'X'] })).toBe(4)
      expect(getComputerMove({ board: ['O', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'X'] })).toBe(undefined)
    })
  })
  describe('Hard Mode', () => {
    test(`plays in the center when user's first move is a corner`, function(){
      const move = getComputerMove({ board: ['X','','', '','','', '','',''], isHard: true })
      expect(move).toBe(4)
    })
    test(`plays in any corner when user's first move is the center`, function(){
      const move = getComputerMove({ board: ['','','','','X','','','',''], isHard: true })
      expect([0, 2, 6, 8]).toContain(move)
    })
    test('blocks the user from winning', function(){
      const move = getComputerMove({ board: ['','','','','O','','','X','X'], isHard: true })
      // ['','','','','O','','O','X','X']
      expect(move).toBe(6)
    })
    test('completes a horizontal win', function(){
      const move = getComputerMove({ board: ['O','O','','X','X','','O','X','X'], isHard: true })
      // ['O','O','O','X','X','','O','X','X']
      expect(move).toBe(2)
    })
    test('completes a vertical win', function(){
      const move = getComputerMove({ board: ['O','O','X','','X','','O','X','X'], isHard: true })
      // ['O','O','X','O','X','','O','X','X']
      expect(move).toBe(3)
    })
    test('completes a diagonal win', function(){
      const move = getComputerMove({ board: ['O','X','O','X','','X','O','','X'], isHard: true })
      // ['O','X','O','X','O','X','O','','X']
      expect(move).toBe(4)
    })
    test('prioritizes winning over blocking', function(){
      const move = getComputerMove({ board: ['X','O','X','X','O','X','','','O'], isHard: true })
      // ['X','O','X','X','O','X','','','O']
      expect(move).toBe(7)
    })
  })
})


