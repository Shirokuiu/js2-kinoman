import { FilterType } from '@constants';

const FilterLabelMap = {
  [FilterType.ALL]: 'All movies',
  [FilterType.WATCHLIST]: 'Watchlist',
  [FilterType.WATCHED]: 'History',
  [FilterType.FAVORITES]: 'Favorites',
};

export const makeFilters = (filmsModel) => [
  {
    value: FilterType.ALL,
    count: filmsModel.films.length,
    label: FilterLabelMap[FilterType.ALL],
  },
  {
    value: FilterType.WATCHLIST,
    count: filmsModel.inWatchItems.length,
    label: FilterLabelMap[FilterType.WATCHLIST],
  },
  {
    value: FilterType.WATCHED,
    count: filmsModel.watchedItems.length,
    label: FilterLabelMap[FilterType.WATCHED],
  },
  {
    value: FilterType.FAVORITES,
    count: filmsModel.favorites.length,
    label: FilterLabelMap[FilterType.FAVORITES],
  },
];
