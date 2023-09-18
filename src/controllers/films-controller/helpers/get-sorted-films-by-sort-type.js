import { makeFactoryForSortedFilms } from '@controllers/films-controller/helpers/make-factory-for-sorted-films';

export const getSortedFilmsBySortType = (films, sortType) => makeFactoryForSortedFilms(films)[sortType];
