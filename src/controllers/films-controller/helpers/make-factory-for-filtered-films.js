import { FilterType } from '@constants';

export const makeFactoryForFilteredFilms = (filmsModel) => ({
  [FilterType.ALL]: filmsModel.films,
  [FilterType.WATCHLIST]: filmsModel.inWatchItems,
  [FilterType.WATCHED]: filmsModel.watchedItems,
  [FilterType.FAVORITES]: filmsModel.favorites,
});
