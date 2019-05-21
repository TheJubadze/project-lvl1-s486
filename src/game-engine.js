import readlineSync from 'readline-sync';
const correctAnswersEnough = 3;

const game = (run, gameRules) => {
  console.log(`\nWelcome to the Brain Games!\n${gameRules}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const iter = (tryNumber) => {
    if (tryNumber === correctAnswersEnough) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { question, answer: correctAnswer } = run();
    console.log(`Question: ${question}!`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    iter(tryNumber + 1);
  };

  iter(0);
};

export default game;