import AbstractView from '@core/abstract-view';

export default class FooterStatisticsView extends AbstractView {
  #moviesCount = null;

  constructor(moviesCount) {
    super();

    this.#moviesCount = moviesCount;
  }

  getTemplate() {
    return `<p>${this.#moviesCount} movies inside</p>`;
  }
}
