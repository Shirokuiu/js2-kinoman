import AbstractController from '@core/abstract-controller';
import FilmListExtraView from '@components/film-list-extra-view';
import { remove, render, replace } from '@core/common';
import FilmCardController from '@controllers/film-card-controller';

export default class FilmListMostCommentedController extends AbstractController {
  #filmsModel = null;

  #filmListExtraComponent = null;

  #filmCardController = null;

  #filmCardControllers = [];

  constructor(container$, filmsModel) {
    super(container$);

    this.#filmsModel = filmsModel;

    this.handleFilmsModelEvent = this.handleFilmsModelEvent.bind(this);
  }

  init() {
    this.#render();

    this.#filmsModel.subscribe(this.handleFilmsModelEvent);
  }

  handleFilmsModelEvent() {
    this.#renderFilmCards(this.#filmsModel.mostCommented);
  }

  #render() {
    const previous = this.#filmListExtraComponent;

    this.#filmListExtraComponent = new FilmListExtraView('Most commented');

    if (previous === null) {
      render(this.container$, this.#filmListExtraComponent);

      return;
    }

    replace(this.#filmListExtraComponent, previous);
    remove(previous);
  }

  #renderFilmCards(films) {
    if (this.#filmCardControllers.length) {
      this.#filmCardControllers.forEach((filmCardController) => {
        filmCardController.destroy();
      });

      this.#filmCardController = null;
      this.#filmCardControllers = [];
    }

    films.forEach((film) => {
      this.#renderFilmCard(film);
    });
  }

  #renderFilmCard(film) {
    this.#filmCardController = new FilmCardController(this.#filmListExtraComponent.getContainerForFilms(), film);

    this.#filmCardControllers.push(this.#filmCardController);

    this.#filmCardController.init();
  }
}
