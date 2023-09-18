import AbstractView from '@core/abstract-view';

export default class FilmListExtraView extends AbstractView {
  #title = null;

  constructor(title = 'title') {
    super();

    this.#title = title;
  }

  getTemplate() {
    return `<section class="films-list--extra">
      <h2 class="films-list__title">${this.#title}</h2>

      <div class="films-list__container">
        <!-- FilmCard -->
      </div>
    </section>`;
  }

  getContainerForFilms() {
    return this.getElement().querySelector('.films-list__container');
  }
}
