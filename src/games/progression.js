import runGame from '../game-engine';
import random from '../random';

const gameDescription = 'What number is missing in the progression?';
const length = random(8, 16);
const step = random(2, 10);
const generateGameData = () => {
  const startValue = random(0, 100);
  const indexOfSkippedElement = random(0, length - 1);
  const progression = [...Array(length)].map((_, i) => startValue + i * step);
  progression[indexOfSkippedElement] = '..';
  return {
    question: progression.join(' '),
    answer: (startValue + indexOfSkippedElement * step).toString(),
  };
};

export default () => runGame(generateGameData, gameDescription);
