import { SortType } from '@constants';

export const makeFactoryForSortedFilms = (films) => ({
  [SortType.DEFAULT]: films,
  [SortType.DATE]: [...films].sort((a, b) => b.info.year - a.info.year),
  [SortType.RATING]: [...films].sort((a, b) => b.rating - a.rating),
});
