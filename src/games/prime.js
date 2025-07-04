import { getRandomNumber } from '../random.js'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const answer = isPrime(number) ? 'yes' : 'no'
  return [String(number), answer]
}
