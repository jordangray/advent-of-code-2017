const rows = sheet => sheet.split('\n')
const cells = row => row.split('\t').map(cell => +cell)

const divisorOf = n => m => n % m === 0

const quotient = nums => nums
  .sort((a, b) => b - a)
  .reduce((result, next, i) =>
    result || next / nums.slice(i + 1).find(divisorOf(next))
  , 0)

const quotientSum = input => rows(input)
  .map(row => cells(row))
  .map(quotient)
  .reduce((a, b) => a + b, 0)

export default quotientSum
