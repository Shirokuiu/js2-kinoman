import AbstractComponent from '@components/abstract-component';
import { createMainSortTemplate } from '@components/main-sort-component/helpers';

export default class MainSortComponent extends AbstractComponent {
  getTemplate() {
    return createMainSortTemplate();
  }
}
