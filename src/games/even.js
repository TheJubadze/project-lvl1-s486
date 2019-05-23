import runGame from '../game-engine';
import random from '../random';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = a => a % 2 === 0;
const maxRandom = 100;
const generateGameData = () => {
  const question = random(0, maxRandom);
  return { question, answer: isEven(question) ? 'yes' : 'no' };
};

export default () => runGame(generateGameData, gameDescription);
