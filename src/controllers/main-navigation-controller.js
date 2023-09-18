import AbstractController from '@core/abstract-controller';
import MainNavigationView from '@components/main-navigation-view';
import { remove, render, RenderPosition, replace } from '@core/common';
import { makeFilters } from '@controllers/main-navigation-controller/helpers/make-filters';

export default class MainNavigationController extends AbstractController {
  #mainNavigationComponent = null;

  #filmsModel = null;

  #mainNavigationModel = null;

  #filters = [];

  constructor(container$, filmsModel, mainNavigationModel) {
    super(container$);

    this.#filmsModel = filmsModel;
    this.#mainNavigationModel = mainNavigationModel;

    this.handleFilmsModelEvent = this.handleFilmsModelEvent.bind(this);
    this.handleMainNavigationModelEvent = this.handleMainNavigationModelEvent.bind(this);

    this.handleMainNavigationItemClick = this.handleMainNavigationItemClick.bind(this);
  }

  init() {
    this.#filmsModel.subscribe(this.handleFilmsModelEvent);
    this.#mainNavigationModel.subscribe(this.handleMainNavigationModelEvent);
  }

  handleMainNavigationModelEvent() {
    this.#render();
  }

  handleFilmsModelEvent() {
    this.#filters = makeFilters(this.#filmsModel);

    this.#render();
  }

  handleMainNavigationItemClick(activeFilterType) {
    if (activeFilterType !== this.#mainNavigationModel.activeFilterType) {
      this.#mainNavigationModel.activeFilterType = activeFilterType;
    }
  }

  #render() {
    const previous = this.#mainNavigationComponent;

    this.#mainNavigationComponent = new MainNavigationView(this.#filters, this.#mainNavigationModel.activeFilterType);

    this.#mainNavigationComponent.onMainNavigationItemClick(this.handleMainNavigationItemClick);

    if (previous === null) {
      render(this.container$, this.#mainNavigationComponent, RenderPosition.AFTERBEGIN);

      return;
    }

    replace(this.#mainNavigationComponent, previous);
    remove(previous);
  }
}
