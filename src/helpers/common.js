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

export class EventEmitter {
  #emitters = [];

  emit(evt) {
    this.#emitters.forEach((emitter) => emitter(evt));
  }

  subscribe(cb) {
    this.#emitters.push(cb);
  }

  unsubscribe(cb) {
    this.#emitters = this.#emitters.filter((emitter) => emitter !== cb);
  }
}
