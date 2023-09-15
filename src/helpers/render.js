import { RenderPosition } from '@constants';
import AbstractComponent from '@components/abstract-component';

export const render = (container$, component, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.BEFOREEND:
      container$.append(component.getElement());

      break;
    default:
      break;
  }
};

export const createElement = (template) => {
  if (!template) {
    throw new Error('Prop template is required');
  }

  const newElement = document.createElement('div');

  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof AbstractComponent)) {
    throw new Error('Possible to remove only components');
  }

  component.getElement().remove();
  component.removeElement();
};
