import { getRandomNumber } from '../src/random.js'
export const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const answer = number % 2 === 0 ? 'yes' : 'no'
  return [String(number), answer]
}
