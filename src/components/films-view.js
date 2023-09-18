import AbstractView from '@core/abstract-view';

export default class FilmsView extends AbstractView {
  getTemplate() {
    return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container">
        <!-- FilmCardView -->
      </div>

        <!-- ShowMoreBtnView -->
    </section>

        <!-- FilmsTopRatedView -->
        <!-- FilmsMostCommentedView -->
  </section>`;
  }

  getContainerForFilmCard() {
    return this.getElement().querySelector('.films-list__container');
  }
}
