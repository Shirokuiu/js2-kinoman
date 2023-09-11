import AbstractComponent from '@components/abstract-component';
import { createProfileTemplate } from '@components/header-profile-component/helpers';

export default class HeaderProfileComponent extends AbstractComponent {
  getTemplate() {
    return createProfileTemplate();
  }
}
