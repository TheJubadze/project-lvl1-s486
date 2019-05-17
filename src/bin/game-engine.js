import name from '..';
import readlineSync from 'readline-sync';

console.log(`Hello, ${name}!`);

const correctAnswersEnough = 3;

const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  return 0;
};

const game = (run) => {
  const repeat = (acc) => {
    if (acc === correctAnswersEnough) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { question, answer: correctAnswer } = run();
    console.log(`Question: ${question}!`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (checkAnswer(userAnswer, correctAnswer) === 0) {
      return;
    }
    repeat(acc + 1);
  };

  repeat(0);
};

export default game;
