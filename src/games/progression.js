import game from '../game-engine';
import random from '../random';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = random(8, 16);
const progressionStep = random(2, 10);
const runGame = () => {
  const startValue = random(0, 100);
  const skippedIndex = random(0, progressionLength);
  const progression = [...Array(progressionLength)].map((_, i) => startValue + i * progressionStep);
  progression[skippedIndex] = '..';
  return {
    question: progression.join(' '),
    answer: `${startValue + skippedIndex * progressionStep}`,
  };
};

export default () => game(runGame, gameDescription);
