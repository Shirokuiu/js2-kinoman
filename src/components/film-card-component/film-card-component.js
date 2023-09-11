import AbstractComponent from '@components/abstract-component';
import { createFilmCardTemplate } from '@components/film-card-component/helpers';

export default class FilmCardComponent extends AbstractComponent {
  #film;

  constructor(film) {
    super();

    this.#film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this.#film);
  }
}
