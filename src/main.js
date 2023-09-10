import { generateFilms } from 'src/mocks/generate-films';
import { render } from '@helpers';
import HeaderProfileComponent from '@components/header-profile-component';
import MainNavigationComponent from '@components/main-navigation-component';
import MainSortComponent from '@components/main-sort-component';
import FilmListComponent from '@components/film-list-component';
import FilmCardComponent from '@components/film-card-component';
import ShowMoreBtnComponent from '@components/show-more-btn-component';
import FilmListExtraComponent from '@components/film-list-extra-component';

const renderFilm = (containerElement$, film) => {
  const filmCardComponentInstance = new FilmCardComponent(film);

  render(containerElement$, filmCardComponentInstance.getElement());
};

const renderFilmListExtra = (container, id, title, films) => {
  const [firstFilm, secondFilm] = films;
  const filmListExtraComponent$ = new FilmListExtraComponent(id, title).getElement();
  const filmListExtraContainerForFilms$ = filmListExtraComponent$.querySelector('.films-list__container');

  render(container, filmListExtraComponent$);

  [firstFilm, secondFilm].forEach((film) => {
    render(filmListExtraContainerForFilms$, new FilmCardComponent(film).getElement());
  });
};

const renderFilmList = (container$, films) => {
  const filmListComponent$ = new FilmListComponent().getElement();

  render(container$, filmListComponent$);

  const filmsListContainer$ = filmListComponent$.querySelector('.films-list');
  const filmsContainer$ = filmListComponent$.querySelector('.films-list__container');
  films.forEach((film) => {
    renderFilm(filmsContainer$, film);
  });

  render(filmsListContainer$, new ShowMoreBtnComponent().getElement());

  [
    { id: 'topRated', title: 'Top rated' },
    { id: 'mostCommented', title: 'Most commented' },
  ].forEach(({ id, title }) => {
    renderFilmListExtra(filmListComponent$, id, title, films);
  });
};

const init = () => {
  const films = generateFilms(20);
  const body$ = document.querySelector('body');
  const header$ = body$.querySelector('.header');
  const main$ = body$.querySelector('.main');

  render(header$, new HeaderProfileComponent().getElement());
  render(main$, new MainNavigationComponent().getElement());
  render(main$, new MainSortComponent().getElement());

  renderFilmList(main$, films);
};

init();
