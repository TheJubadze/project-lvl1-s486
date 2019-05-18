#!/usr/bin/env node
import game from '../game-engine';
import random from '../random';

const maxRandom = 100;
const gameRules = 'Answer "yes" if number even otherwise answer "no".';

game(() => {
  const a = random(maxRandom);
  return {
    question: `${a}`,
    answer: `${((a % 2 === 0) ? 'yes' : 'no')}`,
  };
}, gameRules);
