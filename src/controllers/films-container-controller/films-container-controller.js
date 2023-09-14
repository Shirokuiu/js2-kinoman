import FilmListExtraComponent from '@components/film-list-extra-component/film-list-extra-component';
import { render } from '@helpers/render';
import FilmCardComponent from '@components/film-card-component/film-card-component';
import FilmsContainerComponent from '@components/films-container-component/films-container-component';
import ShowMoreBtnComponent from '@components/show-more-btn-component/show-more-btn-component';
import AbstractController from '@controllers/abstract-controller';
import { makeExtraListData } from '@controllers/films-container-controller/helpers/make-extra-list-data';

export default class FilmsContainerController extends AbstractController {
  #filmsContainerComponent;

  #showMoreBtnComponent;

  constructor(container$) {
    super(container$);

    this.#filmsContainerComponent = new FilmsContainerComponent();
    this.#showMoreBtnComponent = new ShowMoreBtnComponent();
  }

  render(films) {
    this.#renderFilmsContainer(this.container$, films);
  }

  #renderFilmsContainer(container$, films) {
    render(container$, this.#filmsContainerComponent);

    const filmsListContainer$ = this.#filmsContainerComponent.getElement().querySelector('.films-list');
    const filmsContainer$ = this.#filmsContainerComponent.getElement().querySelector('.films-list__container');

    films.forEach((film) => {
      render(filmsContainer$, new FilmCardComponent(film));
    });

    render(filmsListContainer$, this.#showMoreBtnComponent);

    makeExtraListData().forEach(({ id, title }) => {
      FilmsContainerController.#renderFilmListExtra(this.#filmsContainerComponent.getElement(), id, title, films);
    });
  }

  static #renderFilmListExtra(container$, id, title, films) {
    const [firstFilm, secondFilm] = films;
    const filmListExtraComponentInstance = new FilmListExtraComponent(id, title);
    const filmListExtraContainerForFilms$ = filmListExtraComponentInstance
      .getElement()
      .querySelector('.films-list__container');

    render(container$, filmListExtraComponentInstance);

    [firstFilm, secondFilm].forEach((film) => {
      render(filmListExtraContainerForFilms$, new FilmCardComponent(film));
    });
  }
}
