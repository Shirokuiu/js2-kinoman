import { getRandomInt, shuffle } from '@helpers/common';

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];
const TITLES = [
  'The Dance of Life',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor',
];
const RATINGS = ['8.3', '3.2', '9.0', '2.3', '6.3'];
const YEARS = [1933, 1955, 1964, 1936];
const DURATIONS = ['1h 55m', '54m', '1h 59m', '1h 21m', '16m'];
const GENRES = ['Musical', 'Western', 'Drama', 'Comedy', 'Cartoon'];
const POSTERS = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

export const generateFilms = (count) =>
  new Array(count).fill('').map((_, idx) => ({
    id: idx + 1,
    title: shuffle(TITLES)[getRandomInt(0, TITLES.length - 1)],
    rating: shuffle(RATINGS)[getRandomInt(0, RATINGS.length - 1)],
    info: {
      year: shuffle(YEARS)[getRandomInt(0, YEARS.length - 1)],
      duration: shuffle(DURATIONS)[getRandomInt(0, DURATIONS.length - 1)],
      genre: shuffle(GENRES)[getRandomInt(0, GENRES.length - 1)],
    },
    poster: shuffle(POSTERS)[getRandomInt(0, POSTERS.length - 1)],
    description: shuffle(DESCRIPTIONS)
      .filter((__, descriptionIdx) => descriptionIdx < getRandomInt(1, 5))
      .join(' '),
    comments: getRandomInt(0, 5),
    inWatchList: Boolean(getRandomInt(0, 1)),
    watched: Boolean(getRandomInt(0, 1)),
    favorite: Boolean(getRandomInt(0, 1)),
  }));
