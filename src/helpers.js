import { RenderPosition } from '@constants';

export const getRandomInt = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);

  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

export const shuffle = (arr) => {
  const copyArr = [...arr];
  let currentIndex = copyArr.length;
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex -= 1;
    [copyArr[currentIndex], copyArr[randomIndex]] = [copyArr[randomIndex], copyArr[currentIndex]];
  }

  return copyArr;
};

export const render = (container, element, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.BEFOREEND:
      container.append(element);

      break;
    default:
      break;
  }
};

export const createElement = (template) => {
  if (!template) {
    throw new Error('Prop template is required');
  }

  const newElement = document.createElement('div');

  newElement.innerHTML = template;

  return newElement.firstChild;
};
