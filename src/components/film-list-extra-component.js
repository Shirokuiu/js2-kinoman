import { createElement } from '@helpers/render';

const createFilmListExtraTemplate = (id, title = 'Title') => `<section id="${id}" class="films-list--extra">
  <h2 class="films-list__title">${title}</h2>
  <div class="films-list__container"></div>
</section>`;

export default class FilmListExtraComponent {
  #element;

  #id;

  #title;

  constructor(id, title = 'title') {
    this.#id = id;
    this.#title = title;
  }

  getElement() {
    if (!this.#element) {
      this.#element = createElement(this.#getTemplate());
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }

  #getTemplate() {
    return createFilmListExtraTemplate(this.#id, this.#title);
  }
}
