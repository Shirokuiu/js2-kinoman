import { createElement } from '@helpers';

const getControlsActiveClass = (flag) => (flag ? ' film-card__controls-item--active' : '');

const createFilmCardTemplate = (film) => {
  const { title, rating, info, poster, description, comments, inWatchList, watched, favorite } = film;

  const watchListActiveClass = getControlsActiveClass(inWatchList);
  const watchedActiveClass = getControlsActiveClass(watched);
  const favoriteActiveClass = getControlsActiveClass(favorite);

  return `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${info.year}</span>
            <span class="film-card__duration">${info.duration}</span>
            <span class="film-card__genre">${info.genre}</span>
          </p>
          <img src="./images/posters/${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a class="film-card__comments">${comments} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist${watchListActiveClass}">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched${watchedActiveClass}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite${favoriteActiveClass}">Mark as favorite</button>
          </form>
        </article>`;
};

export default class FilmCardComponent {
  #element;

  #film;

  constructor(film) {
    this.#film = film;
  }

  getElement() {
    if (!this.#element) {
      this.#element = createElement(this.#getTemplate());
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }

  #getTemplate() {
    return createFilmCardTemplate(this.#film);
  }
}
