import AbstractController from '@core/abstract-controller';
import FilmsView from '@components/films-view';
import { remove, render, replace } from '@core/common';
import FilmCardController from '@controllers/film-card-controller';
import { getFilteredFilmsByFilterType } from '@controllers/films-controller/helpers/get-filtered-films-by-filter-type';
import { getSortedFilmsBySortType } from '@helpers/common';
import FilmListTopRatedController from '@controllers/film-list-top-rated-controller';
import FilmListMostCommentedController from '@controllers/film-list-most-commented-controller';

export default class FilmsController extends AbstractController {
  #filmCardController = null;

  #filmCardControllers = [];

  #filmListTopRatedController = null;

  #filmListMostCommentedController = null;

  #filmsComponent = null;

  #filmsModel = null;

  #mainNavigationModel = null;

  #mainSortModel = null;

  constructor(container$, filmsModel, mainNavigationModel, mainSortModel) {
    super(container$);

    this.#filmsModel = filmsModel;
    this.#mainNavigationModel = mainNavigationModel;
    this.#mainSortModel = mainSortModel;

    this.handleFilmsModelEvent = this.handleFilmsModelEvent.bind(this);
    this.handleMainNavigationModelEvent = this.handleMainNavigationModelEvent.bind(this);
    this.handleMainSortModelEvent = this.handleMainSortModelEvent.bind(this);
  }

  init() {
    this.#renderFilmsComponent();
    this.#renderFilmsListTopRated();
    this.#renderFilmListMostCommented();

    this.#filmsModel.subscribe(this.handleFilmsModelEvent);
    this.#mainNavigationModel.subscribe(this.handleMainNavigationModelEvent);
    this.#mainSortModel.subscribe(this.handleMainSortModelEvent);
  }

  handleMainSortModelEvent() {
    this.#renderFilmsByFilterAndSort();
  }

  handleMainNavigationModelEvent() {
    this.#renderFilmsByFilterAndSort();
  }

  handleFilmsModelEvent() {
    this.#renderFilmCards(this.#filmsModel.films);
  }

  #renderFilmsByFilterAndSort() {
    const filteredFilms = getFilteredFilmsByFilterType(this.#filmsModel, this.#mainNavigationModel.activeFilterType);
    const sortedFilms = getSortedFilmsBySortType(filteredFilms, this.#mainSortModel.activeSortType);

    this.#renderFilmCards(sortedFilms);
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

  #renderFilmsListTopRated() {
    this.#filmListTopRatedController = new FilmListTopRatedController(
      this.#filmsComponent.getElement(),
      this.#filmsModel,
    );

    this.#filmListTopRatedController.init();
  }

  #renderFilmListMostCommented() {
    this.#filmListMostCommentedController = new FilmListMostCommentedController(
      this.#filmsComponent.getElement(),
      this.#filmsModel,
    );

    this.#filmListMostCommentedController.init();
  }
}
