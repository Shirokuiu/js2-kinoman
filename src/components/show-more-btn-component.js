import { createElement } from '@helpers/render';

const createShowMoreBtnTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class ShowMoreBtnComponent {
  #element;

  getElement() {
    if (!this.#element) {
      this.#element = createElement(ShowMoreBtnComponent.#getTemplate());
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }

  static #getTemplate() {
    return createShowMoreBtnTemplate();
  }
}
