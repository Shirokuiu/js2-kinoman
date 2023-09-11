import AbstractComponent from '@components/abstract-component';
import { createMainNavigationTemplate } from '@components/main-navigation-component/helpers';

export default class MainNavigationComponent extends AbstractComponent {
  getTemplate() {
    return createMainNavigationTemplate();
  }
}
