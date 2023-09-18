import AbstractController from '@core/abstract-controller';
import FilmsView from '@components/films-view';
import { remove, render, replace } from '@core/common';
import FilmCardController from '@controllers/film-card-controller';
import { FilterType } from '@constants';

export default class FilmsController extends AbstractController {
  #filmCardController = null;

  #filmCardControllers = [];

  #filmsComponent = null;

  #filmsModel = null;

  #mainNavigationModel = null;

  constructor(container$, filmsModel, mainNavigationModel) {
    super(container$);

    this.#filmsModel = filmsModel;
    this.#mainNavigationModel = mainNavigationModel;

    this.handleFilmsModelEvent = this.handleFilmsModelEvent.bind(this);
    this.handleMainNavigationModelEvent = this.handleMainNavigationModelEvent.bind(this);
  }

  init() {
    this.#renderFilmsComponent();

    this.#filmsModel.subscribe(this.handleFilmsModelEvent);
    this.#mainNavigationModel.subscribe(this.handleMainNavigationModelEvent);
  }

  handleMainNavigationModelEvent() {
    switch (this.#mainNavigationModel.activeFilterType) {
      case FilterType.ALL:
        this.#renderFilmCards(this.#filmsModel.films);

        break;
      case FilterType.WATCHLIST:
        this.#renderFilmCards(this.#filmsModel.inWatchItems);

        break;
      case FilterType.WATCHED:
        this.#renderFilmCards(this.#filmsModel.watchedItems);

        break;
      case FilterType.FAVORITES:
        this.#renderFilmCards(this.#filmsModel.favorites);

        break;
      default:
        break;
    }
  }

  handleFilmsModelEvent() {
    this.#renderFilmCards(this.#filmsModel.films);
  }

  #renderFilmCards(films) {
    if (this.#filmCardControllers.length) {
      this.#filmCardControllers.forEach((filmCardController) => filmCardController.destroy());

      this.#filmCardController = null;
      this.#filmCardControllers = [];
    }

    films.forEach((film) => {
      this.#renderFilmCardController(film);
    });
  }

  #renderFilmCardController(film) {
    this.#filmCardController = new FilmCardController(this.#filmsComponent.getContainerForFilmCard(), film);

    this.#filmCardControllers.push(this.#filmCardController);
    this.#filmCardController.init();
  }

  #renderFilmsComponent() {
    const previous = this.#filmsComponent;

    this.#filmsComponent = new FilmsView();

    if (previous === null) {
      render(this.container$, this.#filmsComponent);

      return;
    }

    replace(this.#filmsComponent, previous);
    remove(previous);
  }
}
