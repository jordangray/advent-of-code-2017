const halfwayAround = (str, from) => {
  const length = str.length
  const index = (from + length / 2) % length
  return str[index]
}

const sumHalfway = input => [...input]
  .filter((char, index) => char === halfwayAround(input, index))
  .map(str => +str)
  .reduce((a, b) => a + b, 0)

export default sumHalfway
