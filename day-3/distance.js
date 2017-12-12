/*

Explanation:

- The next perfect square S (with root R) from cell c is:

    S = ceil(sqrt(n)) ^ 2

- The distance from any perfect square s to the centre is:

    d_s = sqrt(s) - 1

- The distance d_c from c to the centre is at most the distance d_S from S to
  the centre:

    d_c <= d_S

- Moving backwards along the spiral from S, the distance to the centre varies
  according to the zigzag sequence with period S. A simple formula for the nth
  term of a period-m zigzag sequence is:

    a_n = abs(n - m * round(n / m))

- Putting this together, we can calculate d_c:

    d_c = d_S - abs(c - R * round(c / R))

*/

const distance = num => {
  const root = Math.sqrt(num)

  const ceil = Math.ceil(root)

  const delta = ceil ** 2 - num + 1
  const offset = Math.abs(delta - ceil * Math.round(delta / ceil))

  return ceil - 1 - offset
}

export default distance
