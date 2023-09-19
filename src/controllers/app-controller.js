import AbstractController from '@core/abstract-controller';
import HeaderUserProfileController from '@controllers/header-user-profile-controller';
import MainNavigationController from '@controllers/main-navigation-controller';
import MainSortController from '@controllers/main-sort-controller/main-sort-controller';
import FilmsController from '@controllers/films-controller/films-controller';
import { generateFilms } from 'src/mocks/generate-films';
import FilmsModel from 'src/models/films-model';
import MainNavigationModel from 'src/models/main-navigation-model';
import MainSortModel from 'src/models/main-sort-model';
import FooterStatisticsController from '@controllers/footer-statistics-controller';

export default class AppController extends AbstractController {
  #headerUserProfileController = null;

  #mainNavigationController = null;

  #mainSortController = null;

  #filmsController = null;

  #footerStatisticsController = null;

  #filmsModel = new FilmsModel();

  #mainNavigationModel = new MainNavigationModel();

  #mainSortModel = new MainSortModel();

  init() {
    const films = generateFilms(10);
    const header$ = this.container$.querySelector('.header');
    const main$ = this.container$.querySelector('.main');
    const footerStatistics$ = this.container$.querySelector('.footer__statistics');

    this.#headerUserProfileController = new HeaderUserProfileController(header$);
    this.#mainNavigationController = new MainNavigationController(main$, this.#filmsModel, this.#mainNavigationModel);
    this.#mainSortController = new MainSortController(main$, this.#mainSortModel);
    this.#filmsController = new FilmsController(
      main$,
      this.#filmsModel,
      this.#mainNavigationModel,
      this.#mainSortModel,
    );
    this.#footerStatisticsController = new FooterStatisticsController(footerStatistics$, this.#filmsModel);

    this.#headerUserProfileController.init();
    this.#mainNavigationController.init();
    this.#mainSortController.init();
    this.#filmsController.init();
    this.#footerStatisticsController.init();

    this.#filmsModel.films = films;
  }
}
