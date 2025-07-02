import { getRandomNumber } from '../src/random.js'

const calculateGCD = (a, b) => {
  if (!b) return a
  return calculateGCD(b, a % b)
}

export const rules = 'Find the greatest common divisor of given numbers.'

export const generateRound = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const question = `${num1} ${num2}`
  const answer = String(calculateGCD(num1, num2))
  return [question, answer]
}
