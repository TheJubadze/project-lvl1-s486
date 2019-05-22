import runGame from '../game-engine';
import random from '../random';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNumber = 100;
const isPrime = (number) => {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  return prime && (number > 1);
};

const getGameObject = () => {
  const gameQuestionNumber = random(0, maxNumber);
  return {
    question: gameQuestionNumber,
    answer: isPrime(gameQuestionNumber) ? 'yes' : 'no',
  };
};

export default () => runGame(getGameObject, gameDescription);
