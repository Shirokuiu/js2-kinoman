import {
  containerForFilms,
  filmCard,
  filmListExtra,
  headerProfile,
  mainNavigation,
  mainSort,
  showMoreBtn,
} from '@components';

const Positions = {
  BEFOREEND: 'beforeend',
};

const render = (container, template, position = Positions.BEFOREEND) => {
  container.insertAdjacentHTML(position, template);
};

const createElements = () => {
  const body$ = document.querySelector('body');
  const header$ = body$.querySelector('.header');
  const main$ = body$.querySelector('.main');

  render(header$, headerProfile());
  render(main$, mainNavigation());
  render(main$, mainSort());
  render(main$, containerForFilms());

  const containerForFilms$ = main$.querySelector('.films');
  const containerForFilmList$ = containerForFilms$.querySelector('.films-list');
  const containerForFilmListCard$ = containerForFilmList$.querySelector('.films-list__container');

  [1, 2, 3, 4, 5].forEach(() => {
    render(containerForFilmListCard$, filmCard());
  });

  render(containerForFilmList$, showMoreBtn());

  [
    { id: 'topRated', title: 'Top rated' },
    { id: 'mostCommented', title: 'Most commented' },
  ].forEach(({ id, title }) => {
    render(containerForFilms$, filmListExtra(id, title));
  });

  const topRatedContainer$ = containerForFilms$.querySelector('#topRated');
  const mostCommentedContainer$ = containerForFilms$.querySelector('#mostCommented');
  const topRatedContainerFilmsContainer$ = topRatedContainer$.querySelector('.films-list__container');
  const mostCommentedContainerFilmsContainer$ = mostCommentedContainer$.querySelector('.films-list__container');

  [topRatedContainerFilmsContainer$, mostCommentedContainerFilmsContainer$].forEach((container) => {
    [1, 2].forEach(() => {
      render(container, filmCard());
    });
  });
};

createElements();
