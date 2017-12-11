const rows = sheet => sheet.split('\n')
const cells = row => row.split('\t').map(cell => +cell)

const checksum = input => rows(input)
  .map(row => cells(row))
  .map(row => Math.max(...row) - Math.min(...row))
  .reduce((a, b) => a + b, 0)

export default checksum
