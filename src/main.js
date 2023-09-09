import {
  containerForFilms,
  filmCard,
  filmListExtra,
  headerProfile,
  mainNavigation,
  mainSort,
  showMoreBtn,
} from '@components';
import { generateFilms } from 'src/mocks/generate-films';
import { render } from 'src/helpers';

const init = () => {
  const films = generateFilms(20);
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

  films.forEach((film) => {
    render(containerForFilmListCard$, filmCard(film));
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
    [films[0], films[1]].forEach((film) => {
      render(container, filmCard(film));
    });
  });
};

init();
