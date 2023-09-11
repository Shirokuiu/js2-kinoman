import AbstractComponent from '@components/abstract-component';
import { createFilmListExtraTemplate } from '@components/film-list-extra-component/helpers';

export default class FilmListExtraComponent extends AbstractComponent {
  #id;

  #title;

  constructor(id, title = 'title') {
    super();

    this.#id = id;
    this.#title = title;
  }

  getTemplate() {
    return createFilmListExtraTemplate(this.#id, this.#title);
  }
}
