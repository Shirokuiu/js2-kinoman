import { SortType } from '@constants';

const SortTypeLabelMap = {
  [SortType.DEFAULT]: 'Sort by default',
  [SortType.DATE]: 'Sort by date',
  [SortType.RATING]: 'Sort by rating',
};

export const makeSortControls = () =>
  [SortType.DEFAULT, SortType.DATE, SortType.RATING].map((value) => ({
    value,
    label: SortTypeLabelMap[value],
  }));
