import { getRandomNumber } from '../random.js'

const getRandomOperator = () => ['+', '-', '*'][Math.floor(Math.random() * 3)]

export const rules = 'What is the result of the expression?'

export const generateRound = () => {
  const a = getRandomNumber(1, 100)
  const b = getRandomNumber(1, 100)
  const operator = getRandomOperator()

  let answer
  switch (operator) {
    case '+': answer = a + b
      break
    case '-': answer = a - b
      break
    case '*': answer = a * b
      break
    default: throw new Error(`Unknown operator: ${operator}`)
  }

  return [`${a} ${operator} ${b}`, String(answer)]
}
