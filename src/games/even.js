import game from '../game-engine';
import random from '../random';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = a => ((a % 2 === 0) ? 'yes' : 'no');
const maxRandom = 100;
const runGame = () => {
  const number = random(0, maxRandom);
  return {
    question: `${number}`,
    answer: `${(isEven(number))}`,
  };
};

export default () => game(runGame, gameDescription);
