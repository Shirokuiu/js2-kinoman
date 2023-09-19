import AbstractController from '@core/abstract-controller';
import FooterStatisticsView from '@components/footer-statistics-view';
import { remove, render, replace } from '@core/common';

export default class FooterStatisticsController extends AbstractController {
  #filmsModel = null;

  #footerStatisticsComponent = null;

  constructor(container$, filmsModel) {
    super(container$);

    this.#filmsModel = filmsModel;

    this.handleFilmsModelEvent = this.handleFilmsModelEvent.bind(this);
  }

  init() {
    this.#filmsModel.subscribe(this.handleFilmsModelEvent);
  }

  handleFilmsModelEvent() {
    this.#render();
  }

  #render() {
    const previous = this.#footerStatisticsComponent;

    this.#footerStatisticsComponent = new FooterStatisticsView(this.#filmsModel.films.length);

    if (previous === null) {
      render(this.container$, this.#footerStatisticsComponent);

      return;
    }

    replace(this.#footerStatisticsComponent, previous);
    remove(previous);
  }
}
