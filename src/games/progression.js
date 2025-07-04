import { getRandomNumber } from '../random.js'

function generateProgression(start, step, length) {
  return Array.from({ length }, (_, i) => start + i * step)
}

export const rules = 'What number is missing in the progression?'

export const generateRound = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(1, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)
  const progression = generateProgression(start, step, length)
  const answer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, answer]
}
