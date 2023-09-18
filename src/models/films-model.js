import AbstractModel from '@core/abstract-model';

export default class FilmsModel extends AbstractModel {
  #films = [];

  get films() {
    return this.#films;
  }

  set films(films) {
    this.#films = films;
    this.eventEmitter.emit(films);
  }

  get inWatchItems() {
    return this.#films.filter(({ inWatchList }) => inWatchList);
  }

  get watchedItems() {
    return this.#films.filter(({ watched }) => watched);
  }

  get favorites() {
    return this.#films.filter(({ favorite }) => favorite);
  }
}
