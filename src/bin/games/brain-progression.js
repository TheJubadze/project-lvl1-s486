#!/usr/bin/env node
import game from '../game-engine';
import random, { randomFromTo } from '../random';

const gameRules = 'What number is missing in the progression?';
const progressionLength = randomFromTo(8, 16);
const progressionStep = randomFromTo(2, 10);

game(() => {
  const startValue = random(100);
  const skippedIndex = random(progressionLength);
  const progression = [...Array(progressionLength)].map((_, i) => startValue + i * progressionStep);
  progression[skippedIndex] = '..';
  return {
    question: progression.join(' '),
    answer: `${startValue + skippedIndex * progressionStep}`,
  };
}, gameRules);
