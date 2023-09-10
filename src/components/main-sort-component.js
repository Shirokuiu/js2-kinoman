import { createElement } from '@helpers/render';

const createMainSortTemplate = () => `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;

export default class MainSortComponent {
  #element;

  getElement() {
    if (!this.#element) {
      this.#element = createElement(MainSortComponent.#getTemplate());
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }

  static #getTemplate() {
    return createMainSortTemplate();
  }
}
