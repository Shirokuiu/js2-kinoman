import { remove, render, replace } from '@core/common';
import AbstractController from '@core/abstract-controller';
import MainSortView from '@components/main-sort-view';
import { makeSortControls } from '@controllers/main-sort-controller/helpers/make-sort-controls';

export default class MainSortController extends AbstractController {
  #sortControls = [];

  #mainSortComponent = null;

  #mainSortModel = null;

  constructor(container$, mainSortModel) {
    super(container$);

    this.#mainSortModel = mainSortModel;

    this.handleMainSortModelEvent = this.handleMainSortModelEvent.bind(this);

    this.handleSortBtnClick = this.handleSortBtnClick.bind(this);
  }

  init() {
    this.#mainSortModel.subscribe(this.handleMainSortModelEvent);

    this.#render();
  }

  handleMainSortModelEvent() {
    this.#render();
  }

  handleSortBtnClick(newSortType) {
    this.#mainSortModel.activeSortType = newSortType;
  }

  #render() {
    const previous = this.#mainSortComponent;
    this.#sortControls = makeSortControls();

    this.#mainSortComponent = new MainSortView(this.#mainSortModel.activeSortType, this.#sortControls);

    this.#mainSortComponent.onSortBtnClick(this.handleSortBtnClick);

    if (previous === null) {
      render(this.container$, this.#mainSortComponent);

      return;
    }

    replace(this.#mainSortComponent, previous);
    remove(previous);
  }
}
