#!/usr/bin/env node

import { createInterface } from 'node:readline'; 
import process from 'node:process';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to the Brain Games!');

rl.question('May I have your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  const requiredCorrectAnswers = 3;

  const askQuestion = () => {
    if (correctAnswersCount >= requiredCorrectAnswers) {
      console.log(`Congratulations, ${name}!`);
      rl.close();
      return;
    }

    const number = Math.floor(Math.random() * 100);
    const isEven = number % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    rl.question(`Question: ${number}\nYour answer: `, (userAnswer) => {
      if (userAnswer.toLowerCase() !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        rl.close();
        return;
      }

      console.log('Correct!');
      correctAnswersCount++;
      askQuestion();
    });
  };

  askQuestion();
});