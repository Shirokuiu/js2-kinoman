import AbstractController from '@core/abstract-controller';
import HeaderUserProfileView from '@components/header-user-profile-view';
import { remove, render, replace } from '@core/common';

export default class HeaderUserProfileController extends AbstractController {
  #headerUserProfileComponent = null;

  init() {
    this.#render();
  }

  #render() {
    const previous = this.#headerUserProfileComponent;

    this.#headerUserProfileComponent = new HeaderUserProfileView();

    if (previous === null) {
      render(this.container$, this.#headerUserProfileComponent);

      return;
    }

    replace(this.#headerUserProfileComponent, previous);
    remove(previous);
  }
}
