import { createElement } from '@helpers/render';

const createFilmsListTemplate = () => `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section>
</section>`;

export default class FilmListComponent {
  #element;

  getElement() {
    if (!this.#element) {
      this.#element = createElement(FilmListComponent.#getTemplate());
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }

  static #getTemplate() {
    return createFilmsListTemplate();
  }
}
