import AbstractController from '@core/abstract-controller';
import HeaderUserProfileController from '@controllers/header-user-profile-controller';
import MainNavigationController from '@controllers/main-navigation-controller';
import MainSortController from '@controllers/main-sort-controller/main-sort-controller';
import FilmsController from '@controllers/films-controller';
import { generateFilms } from 'src/mocks/generate-films';
import FilmsModel from 'src/models/films-model';
import MainNavigationModel from 'src/models/main-navigation-model';
import MainSortModel from 'src/models/main-sort-model';

export default class AppController extends AbstractController {
  #headerUserProfileController = null;

  #mainNavigationController = null;

  #mainSortController = null;

  #filmsController = null;

  #filmsModel = new FilmsModel();

  #mainNavigationModel = new MainNavigationModel();

  #mainSortModel = new MainSortModel();

  init() {
    const films = generateFilms(20);
    const header$ = this.container$.querySelector('.header');
    const main$ = this.container$.querySelector('.main');

    this.#headerUserProfileController = new HeaderUserProfileController(header$);
    this.#mainNavigationController = new MainNavigationController(main$, this.#filmsModel, this.#mainNavigationModel);
    this.#mainSortController = new MainSortController(main$, this.#mainSortModel);
    this.#filmsController = new FilmsController(main$, this.#filmsModel, this.#mainNavigationModel);

    this.#headerUserProfileController.init();
    this.#mainNavigationController.init();
    this.#mainSortController.init();
    this.#filmsController.init();

    this.#filmsModel.films = films;
  }
}
