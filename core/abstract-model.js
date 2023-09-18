import { EventEmitter } from '@core/common';

export default class AbstractModel {
  eventEmitter;

  constructor() {
    if (new.target === AbstractModel) {
      throw new Error(`Can't instantiate AbstractModel, only concrete one`);
    }

    this.eventEmitter = new EventEmitter();
  }

  subscribe(subscruber) {
    this.eventEmitter.subscribe(subscruber);
  }
}
