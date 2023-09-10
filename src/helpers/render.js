import { RenderPosition } from '@constants';

export const render = (container$, componentInstance, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.BEFOREEND:
      container$.append(componentInstance.getElement());

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

export const remove = (componentInstance) => {
  componentInstance.getElement().remove();
  componentInstance.removeElement();
};
