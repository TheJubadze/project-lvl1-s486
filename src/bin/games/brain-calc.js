#!/usr/bin/env node
import game from '../game-engine';
import random from '../random';

const gameRules = 'What is the result of the expression?';
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

game(() => {
  const a = random(maxRandom);
  const b = random(maxRandom);
  const operation = operations[random(operations.length)];
  return {
    question: `${a} ${operation.sign} ${b}`,
    answer: `${operation.execute(a, b)}`,
  };
}, gameRules);
