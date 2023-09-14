import { generateFilms } from 'src/mocks/generate-films';
import { render } from '@helpers/render';
import HeaderProfileComponent from '@components/header-profile-component/header-profile-component';
import MainNavigationComponent from '@components/main-navigation-component/main-navigation-component';
import MainSortComponent from '@components/main-sort-component/main-sort-component';
import FilmsContainerController from 'src/controllers/films-container-controller/films-container-controller';
import AbstractController from 'src/controllers/abstract-controller';

export default class AppController extends AbstractController {
  #headerProfileComponent;

  #mainNavigationComponent;

  #mainSortComponent;

  #filmsContainerController;

  constructor(container$) {
    super(container$);

    this.#headerProfileComponent = new HeaderProfileComponent();
    this.#mainNavigationComponent = new MainNavigationComponent();
    this.#mainSortComponent = new MainSortComponent();
    this.#filmsContainerController = new FilmsContainerController(container$.querySelector('.main'));
  }

  render() {
    const films = generateFilms(20);
    const header$ = this.container$.querySelector('.header');
    const main$ = this.container$.querySelector('.main');

    render(header$, this.#headerProfileComponent);
    render(main$, this.#mainNavigationComponent);
    render(main$, this.#mainSortComponent);

    this.#filmsContainerController.render(films);
  }
}
