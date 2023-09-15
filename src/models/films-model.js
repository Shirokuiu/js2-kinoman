import AbstractModel from 'src/models/abstract-model';

export default class FilmsModel extends AbstractModel {
  #films = [];

  get films() {
    return this.#films;
  }

  set films(films) {
    this.#films = films;
    this.observer.emit(films);
  }
}
