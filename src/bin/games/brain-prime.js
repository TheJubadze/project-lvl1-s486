#!/usr/bin/env node
import game from '../game-engine';
import random from '../random';

const maxN = 100;
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  // The check for the number 2 and 3
  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

game(() => {
  const n = random(maxN);
  return {
    question: `${n}`,
    answer: `${((isPrime(n)) ? 'yes' : 'no')}`,
  };
}, gameRules);
