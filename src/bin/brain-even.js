#!/usr/bin/env node
import name from '..';
import readlineSync from 'readline-sync';

console.log(`Hello, ${name}!`);

const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    return 1;
  }
  console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}.\nLet's try again, ${name}!`);
  return 0;
};

const quest = (n) => {
  console.log(`Question: ${n}!`);
  const userAnswer = readlineSync.question('Your answer: ');
  return (n % 2 === 0)
    ? checkAnswer(userAnswer, 'yes')
    : checkAnswer(userAnswer, 'no');
};

const repeat = (acc) => {
  if (acc === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  repeat(acc + quest(Math.floor(Math.random() * 10)));
};

repeat(0);
