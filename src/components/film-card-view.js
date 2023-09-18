import AbstractView from '@core/abstract-view';

export default class FilmCardView extends AbstractView {
  #filmData = null;

  constructor(filmData) {
    super();

    this.#filmData = filmData;
  }

  getTemplate() {
    const { title, rating, info, poster, description, comments, inWatchList, watched, favorite } = this.#filmData;

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
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${
              inWatchList ? 'film-card__controls-item--active' : ''
            }">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${
              watched ? 'film-card__controls-item--active' : ''
            }"">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${
              favorite ? 'film-card__controls-item--active' : ''
            }"">Mark as favorite</button>
          </form>
        </article>`;
  }
}
