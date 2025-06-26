import { createInterface } from 'node:readline'
import process from 'node:process'

const roundsCount = 3

export const runGame = (gameRules, generateRound) => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  console.log('Welcome to the Brain Games!')

  rl.question('May I have your name? ', (name) => {
    console.log(`Hello, ${name}!`)
    console.log(gameRules)

    const playRound = (roundsLeft) => {
      if (roundsLeft === 0) {
        console.log(`Congratulations, ${name}!`)
        rl.close()
        return
      }

      const [question, correctAnswer] = generateRound()
      rl.question(`Question: ${question}\nYour answer: `, (answer) => {
        if (answer.trim() === correctAnswer) {
          console.log('Correct!')
          playRound(roundsLeft - 1)
        }
        else {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
          console.log(`Let's try again, ${name}!`)
          rl.close()
        }
      })
    }

    playRound(roundsCount)
  })
}
