import AbstractComponent from '@components/abstract-component';
import { createFilmsContainerTemplate } from '@components/films-container-component/helpers';

export default class FilmsContainerComponent extends AbstractComponent {
  getTemplate() {
    return createFilmsContainerTemplate();
  }
}
