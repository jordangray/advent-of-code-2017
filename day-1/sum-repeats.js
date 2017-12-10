const repeated = /(.)(?=\1)|^(.)(?=.*\2$)/g

const sumRepeats = input => input
  .match(repeated)
  .map(str => +str)
  .reduce((a, b) => a + b, 0)

export default sumRepeats
