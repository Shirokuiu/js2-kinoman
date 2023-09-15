import { EventEmitter } from '@helpers/common';

export default class AbstractModel {
  #observer;

  constructor() {
    if (new.target === AbstractModel) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one`);
    }

    this.#observer = new EventEmitter();
  }

  subscribe(subscruber) {
    this.#observer.subscribe(subscruber);
  }
}
