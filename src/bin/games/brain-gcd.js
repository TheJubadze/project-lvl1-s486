#!/usr/bin/env node
import game from '../game-engine';
import random from '../random';

const maxRandom = 100;
const gcd = (a, b) => (!b ? a : gcd(b, a % b));

game(() => {
  const a = random(maxRandom);
  const b = random(maxRandom);
  return {
    question: `${a} ${b}`,
    answer: `${gcd(a, b)}`,
  };
});
