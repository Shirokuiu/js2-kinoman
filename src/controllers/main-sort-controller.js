import { remove, render, replace } from '@core/common';
import AbstractController from '@core/abstract-controller';
import MainSortView from '@components/main-sort-view';

export default class MainSortController extends AbstractController {
  #mainSortComponent = null;

  init() {
    this.#render();
  }

  #render() {
    const previous = this.#mainSortComponent;

    this.#mainSortComponent = new MainSortView();

    if (previous === null) {
      render(this.container$, this.#mainSortComponent);

      return;
    }

    replace(this.#mainSortComponent, previous);
    remove(previous);
  }
}
