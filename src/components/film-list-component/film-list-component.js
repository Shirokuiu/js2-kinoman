import AbstractComponent from '@components/abstract-component';
import { createFilmsListTemplate } from '@components/film-list-component/helpers';

export default class FilmListComponent extends AbstractComponent {
  getTemplate() {
    return createFilmsListTemplate();
  }
}
