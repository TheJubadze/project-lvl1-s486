import runGame from '../game-engine';
import random from '../random';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = a => a % 2 === 0;
const maxRandom = 100;
const getGameObject = () => {
  const gameQuestionNumber = random(0, maxRandom);
  return {
    question: gameQuestionNumber,
    answer: isEven(gameQuestionNumber) ? 'yes' : 'no',
  };
};

export default () => runGame(getGameObject, gameDescription);
