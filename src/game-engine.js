import readlineSync from 'readline-sync';

const correctAnswersEnough = 3;

export default (runGame, gameDescription) => {
  console.log(`\nWelcome to the Brain Games!\n${gameDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const iter = (correctAnswersCount) => {
    if (correctAnswersCount === correctAnswersEnough) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { question, answer } = runGame();
    console.log(`Question: ${question}!`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    iter(correctAnswersCount + 1);
  };

  iter(0);
};
