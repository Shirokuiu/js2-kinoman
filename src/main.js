import { generateFilms } from 'src/mocks/generate-films';
import HeaderProfileComponent from '@components/header-profile-component/header-profile-component';
import MainNavigationComponent from '@components/main-navigation-component/main-navigation-component';
import MainSortComponent from '@components/main-sort-component/main-sort-component';
import FilmListComponent from '@components/film-list-component/film-list-component';
import FilmCardComponent from '@components/film-card-component/film-card-component';
import ShowMoreBtnComponent from '@components/show-more-btn-component/show-more-btn-component';
import FilmListExtraComponent from '@components/film-list-extra-component/film-list-extra-component';
import { render } from '@helpers/render';

const renderFilmListExtra = (container$, id, title, films) => {
  const [firstFilm, secondFilm] = films;
  const filmListExtraComponentInstance = new FilmListExtraComponent(id, title);
  const filmListExtraContainerForFilms$ = filmListExtraComponentInstance
    .getElement()
    .querySelector('.films-list__container');

  render(container$, filmListExtraComponentInstance);

  [firstFilm, secondFilm].forEach((film) => {
    render(filmListExtraContainerForFilms$, new FilmCardComponent(film));
  });
};

const renderFilmList = (container$, films) => {
  const filmListInstance = new FilmListComponent();

  render(container$, filmListInstance);

  const filmsListContainer$ = filmListInstance.getElement().querySelector('.films-list');
  const filmsContainer$ = filmListInstance.getElement().querySelector('.films-list__container');

  films.forEach((film) => {
    render(filmsContainer$, new FilmCardComponent(film));
  });

  render(filmsListContainer$, new ShowMoreBtnComponent());

  [
    { id: 'topRated', title: 'Top rated' },
    { id: 'mostCommented', title: 'Most commented' },
  ].forEach(({ id, title }) => {
    renderFilmListExtra(filmListInstance.getElement(), id, title, films);
  });
};

const init = () => {
  const films = generateFilms(20);
  const body$ = document.querySelector('body');
  const header$ = body$.querySelector('.header');
  const main$ = body$.querySelector('.main');

  render(header$, new HeaderProfileComponent());
  render(main$, new MainNavigationComponent());
  render(main$, new MainSortComponent());

  renderFilmList(main$, films);
};

init();
