export const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateRound = () => {
  const number = Math.floor(Math.random() * 100)
  const isEven = number % 2 === 0
  const answer = isEven ? 'yes' : 'no'
  return [String(number), answer]
}
