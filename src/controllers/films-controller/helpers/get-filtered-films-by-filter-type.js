import { makeFactoryForFilteredFilms } from '@controllers/films-controller/helpers/make-factory-for-filtered-films';

export const getFilteredFilmsByFilterType = (filmsModel, filterType) =>
  makeFactoryForFilteredFilms(filmsModel)[filterType];
