import AbstractComponent from '@components/abstract-component';
import { createShowMoreBtnTemplate } from '@components/show-more-btn-component/helpers';

export default class ShowMoreBtnComponent extends AbstractComponent {
  getTemplate() {
    return createShowMoreBtnTemplate();
  }
}
