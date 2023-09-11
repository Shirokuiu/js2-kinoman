import { generateFilms } from 'src/mocks/generate-films';
import { render } from '@helpers/render';
import HeaderProfileComponent from '@components/header-profile-component/header-profile-component';
import MainNavigationComponent from '@components/main-navigation-component/main-navigation-component';
import MainSortComponent from '@components/main-sort-component/main-sort-component';
import FilmsContainerController from 'src/controllers/films-container-controller/films-container-controller';
import AbstractController from 'src/controllers/abstract-controller';

export default class AppController extends AbstractController {
  #headerProfileComponentInstance;

  #mainNavigationComponentInstance;

  #mainSortComponentInstance;

  #filmsContainerControllerInstance;

  constructor(container$) {
    super(container$);

    this.#headerProfileComponentInstance = new HeaderProfileComponent();
    this.#mainNavigationComponentInstance = new MainNavigationComponent();
    this.#mainSortComponentInstance = new MainSortComponent();
    this.#filmsContainerControllerInstance = new FilmsContainerController(container$.querySelector('.main'));
  }

  render() {
    const films = generateFilms(20);
    const header$ = this.container$.querySelector('.header');
    const main$ = this.container$.querySelector('.main');

    render(header$, this.#headerProfileComponentInstance);
    render(main$, this.#mainNavigationComponentInstance);
    render(main$, this.#mainSortComponentInstance);

    this.#filmsContainerControllerInstance.render(films);
  }
}
