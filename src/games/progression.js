import runGame from '../game-engine';
import random from '../random';

const gameDescription = 'What number is missing in the progression?';
const length = random(8, 16);
const step = random(2, 10);
const getGameObject = () => {
  const startValue = random(0, 100);
  const indexOfSkippedElement = random(0, length);

  // Комментарий ментора: Модуль lodash у вас расположен в секции для разработки. При загрузке пакета пользователем эта функция не заработает.
  // Не могли бы, пожалуйста, объянить подробнее, в каком месте здесь у меня используется модуль lodash? Я старался обойтись лишь прототипом Array.
  // А в pachage.json прописан только eslint-plugin-lodash-fp. Вы его имеете в виду? Спасибо.
  // ЗЫ: Подскажите, пожалуйста, куда можно писать вопросы по шагу "Ментор", ибо там отсутствует форма "Вопросы". Спасибо.
  const progression = [...Array(length)].map((_, i) => startValue + i * step);
  progression[indexOfSkippedElement] = '..';
  return {
    question: progression.join(' '),
    answer: (startValue + indexOfSkippedElement * step).toString(),
  };
};

export default () => runGame(getGameObject, gameDescription);
