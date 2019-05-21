import game from '../game-engine';
import random from '../random';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const minRandom = 1;
const maxRandom = 100;
const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));
const runGame = () => {
  const a = random(minRandom, maxRandom);
  const b = random(minRandom, maxRandom);
  return {
    question: `${a} ${b}`,
    answer: `${getGcd(a, b)}`,
  };
};

export default () => game(runGame, gameDescription);
