import { SortType } from '@constants';

export const getRandomInt = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);

  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

export const shuffle = (arr) => {
  const copyArr = [...arr];
  let currentIndex = copyArr.length;
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex -= 1;
    [copyArr[currentIndex], copyArr[randomIndex]] = [copyArr[randomIndex], copyArr[currentIndex]];
  }

  return copyArr;
};

export const makeFactoryForSortedFilms = (films) => ({
  [SortType.DEFAULT]: films,
  [SortType.DATE]: [...films].sort((a, b) => b.info.year - a.info.year),
  [SortType.RATING]: [...films].sort((a, b) => b.rating - a.rating),
  [SortType.COMMENTS]: [...films].sort((a, b) => b.comments - a.comments),
});

export const getSortedFilmsBySortType = (films, sortType) => makeFactoryForSortedFilms(films)[sortType];
