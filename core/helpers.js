import AbstractView from '@core/abstract-view';

export const isComponent = (component) => {
  if (component === null) {
    return false;
  }

  return component instanceof AbstractView;
};
