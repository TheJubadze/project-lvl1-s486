#!/usr/bin/env node
import name from '..';
import readlineSync from 'readline-sync';

const randomCeiling = 100;
const correctAnswersEnough = 3;

const random = () => Math.floor(Math.random() * randomCeiling);
const getCorrectAnswer = n => ((n % 2 === 0) ? 'yes' : 'no');

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
  return checkAnswer(userAnswer, getCorrectAnswer(n));
};

const repeat = (acc) => {
  if (acc === correctAnswersEnough) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  repeat(acc + quest(random()));
};

repeat(0);
