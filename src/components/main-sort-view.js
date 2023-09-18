import AbstractView from '@core/abstract-view';

export default class MainSortView extends AbstractView {
  #sortControls = [];

  #activeSortType = null;

  constructor(activeSortType, sortControls) {
    super();

    this.#sortControls = sortControls;
    this.#activeSortType = activeSortType;
  }

  getTemplate() {
    return `<ul class="sort">
      ${this.#sortControls
        .map(
          ({ value, label }) =>
            `<li><a href="#" data-sort-type='${value}' class="sort__button ${
              this.#activeSortType === value ? 'sort__button--active' : ''
            }">${label}</a></li>`,
        )
        .join('')
        .trim()}
  </ul>`;
  }

  onSortBtnClick(cb) {
    [...this.getElement().querySelectorAll('.sort__button')].forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        evt.preventDefault();

        cb(evt.target.dataset.sortType);
      });
    });
  }
}
