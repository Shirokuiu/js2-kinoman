import { createElement } from '@core/common';

export default class AbstractView {
  #element;

  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one`);
    }
  }

  getTemplate() {
    throw new Error('Abstract method not implemented: getTemplate');
  }

  getElement() {
    if (!this.#element) {
      this.#element = createElement(this.getTemplate());
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
