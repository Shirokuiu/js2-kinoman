import { isComponent } from '@core/helpers';

export const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

export const createElement = (template) => {
  if (!template) {
    throw new Error('Prop template is required');
  }

  const newElement = document.createElement('div');

  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const render = (container$, component, place = RenderPosition.BEFOREEND) => {
  if (!isComponent(component)) {
    throw new Error('Possible to render only components');
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container$.prepend(component.getElement());

      break;

    case RenderPosition.BEFOREEND:
      container$.append(component.getElement());

      break;
    default:
      break;
  }
};

export const replace = (newComponent, oldComponent) => {
  const { parentElement } = oldComponent.getElement();

  if (parentElement === null) {
    throw new Error(`Can't replace non-existent elements`);
  }

  parentElement.replaceChild(newComponent.getElement(), oldComponent.getElement());
};

export const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

export class EventEmitter {
  #subscribers = [];

  emit(evt) {
    this.#subscribers.forEach((subscriber) => subscriber(evt));
  }

  subscribe(cb) {
    this.#subscribers.push(cb);
  }

  unsubscribe(unsubscriber) {
    this.#subscribers = this.#subscribers.filter((subscriber) => subscriber !== unsubscriber);
  }
}
