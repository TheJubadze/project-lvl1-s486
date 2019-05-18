#!/usr/bin/env node
import game from '../game-engine';
import { randomFromTo } from '../random';

const gameRules = 'Find the greatest common divisor of given numbers.';
const minRandom = 1;
const maxRandom = 100;
const gcd = (a, b) => (!b ? a : gcd(b, a % b));

game(() => {
  const a = randomFromTo(minRandom, maxRandom);
  const b = randomFromTo(minRandom, maxRandom);
  return {
    question: `${a} ${b}`,
    answer: `${gcd(a, b)}`,
  };
}, gameRules);
