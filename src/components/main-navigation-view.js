import AbstractView from '@core/abstract-view';
import { FilterType } from '@constants';

export default class MainNavigationView extends AbstractView {
  #filters = null;

  #activeFilterType = null;

  constructor(filters, activeFilterType) {
    super();

    this.#filters = filters;
    this.#activeFilterType = activeFilterType;
  }

  getTemplate() {
    return `<nav class="main-navigation">
    <div class="main-navigation__items">
    ${this.#filters
      .map(
        (filter) =>
          `<a href="#" data-filter-type='${filter.value}' class="main-navigation__item ${
            filter.value === this.#activeFilterType ? `main-navigation__item--active` : ''
          }">${filter.label} ${
            filter.value !== FilterType.ALL ? `<span class="main-navigation__item-count">${filter.count}</span>` : ''
          }</a>`,
      )
      .join('')
      .trim()}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
  }

  onMainNavigationItemClick(cb) {
    [...this.getElement().querySelectorAll('.main-navigation__item')].forEach((itemNavigation) => {
      itemNavigation.addEventListener('click', (evt) => {
        evt.preventDefault();

        cb(evt.currentTarget.dataset.filterType);
      });
    });
  }
}
