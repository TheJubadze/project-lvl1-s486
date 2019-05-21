import game from '../game-engine';
import random from '../random';

const gameDescription = 'What is the result of the expression?';
const maxRandom = 100;
const operations = [
  {
    sign: '+',
    execute: (a, b) => a + b,
  },
  {
    sign: '-',
    execute: (a, b) => a - b,
  },
  {
    sign: '*',
    execute: (a, b) => a * b,
  },
];
const gameProcess = () => {
  const a = random(0, maxRandom);
  const b = random(0, maxRandom);
  const operation = operations[random(0, operations.length)];
  return {
    question: `${a} ${operation.sign} ${b}`,
    answer: `${operation.execute(a, b)}`,
  };
};

export default () => game(gameProcess, gameDescription);
