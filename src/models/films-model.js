import AbstractModel from '@core/abstract-model';
import { getSortedFilmsBySortType } from '@helpers/common';
import { SortType } from '@constants';

const TOP_RATED_SLICE_COUNT = 2;

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

  get topRated() {
    return getSortedFilmsBySortType(this.#films, SortType.RATING).slice(0, TOP_RATED_SLICE_COUNT);
  }
}
