const Positions = {
  BEFOREEND: 'beforeend',
};

const render = (container, template, position = Positions.BEFOREEND) => {
  container.insertAdjacentHTML(position, template);
};

const createHeaderProfile = () => `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;

const createMainNavigation = () => `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;

const createSort = () => `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;

const createContainerForFilms = () => `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section>
</section>`;

const createFilmCard = () => `<article class="film-card">
          <h3 class="film-card__title">The Dance of Life</h3>
          <p class="film-card__rating">8.3</p>
          <p class="film-card__info">
            <span class="film-card__year">1929</span>
            <span class="film-card__duration">1h 55m</span>
            <span class="film-card__genre">Musical</span>
          </p>
          <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
          <a class="film-card__comments">5 comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`;

const createFilmListExtra = (id, title = 'Title') => `<section id="${id}" class="films-list--extra">
  <h2 class="films-list__title">${title}</h2>
  <div class="films-list__container"></div>
</section>`;

const createShowMoreBtn = () => '<button class="films-list__show-more">Show more</button>';

const createElements = () => {
  const body$ = document.querySelector('body');
  const header$ = body$.querySelector('.header');
  const main$ = body$.querySelector('.main');

  render(header$, createHeaderProfile());
  render(main$, createMainNavigation());
  render(main$, createSort());
  render(main$, createContainerForFilms());

  const containerForFilms$ = main$.querySelector('.films');
  const containerForFilmList$ = containerForFilms$.querySelector('.films-list');
  const containerForFilmListCard$ = containerForFilmList$.querySelector('.films-list__container');

  [1, 2, 3, 4, 5].forEach(() => {
    render(containerForFilmListCard$, createFilmCard());
  });

  render(containerForFilmList$, createShowMoreBtn());

  [
    { id: 'topRated', title: 'Top rated' },
    { id: 'mostCommented', title: 'Most commented' },
  ].forEach(({ id, title }) => {
    render(containerForFilms$, createFilmListExtra(id, title));
  });

  const topRatedContainer$ = containerForFilms$.querySelector('#topRated');
  const mostCommentedContainer$ = containerForFilms$.querySelector('#mostCommented');
  const topRatedContainerFilmsContainer$ = topRatedContainer$.querySelector('.films-list__container');
  const mostCommentedContainerFilmsContainer$ = mostCommentedContainer$.querySelector('.films-list__container');

  [topRatedContainerFilmsContainer$, mostCommentedContainerFilmsContainer$].forEach((container) => {
    [1, 2].forEach(() => {
      render(container, createFilmCard());
    });
  });
};

createElements();
