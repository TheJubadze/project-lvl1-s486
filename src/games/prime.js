import runGame from '../game-engine';
import random from '../random';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNumber = 100;
const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const generateGameData = () => {
  const question = random(0, maxNumber);
  return { question, answer: isPrime(question) ? 'yes' : 'no' };
};

export default () => runGame(generateGameData, gameDescription);
