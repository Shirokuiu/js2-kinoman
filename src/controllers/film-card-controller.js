import AbstractController from '@core/abstract-controller';
import FilmCardView from '@components/film-card-view';
import { remove, render, replace } from '@core/common';

export default class FilmCardController extends AbstractController {
  #filmCardComponent = null;

  #filmData = null;

  constructor(container$, filmData) {
    super(container$);

    this.#filmData = filmData;
  }

  init() {
    this.#render();
  }

  destroy() {
    remove(this.#filmCardComponent);
  }

  #render() {
    const previous = this.#filmCardComponent;

    this.#filmCardComponent = new FilmCardView(this.#filmData);

    if (previous === null) {
      render(this.container$, this.#filmCardComponent);

      return;
    }

    replace(this.#filmCardComponent, previous);
    remove(previous);
  }
}
