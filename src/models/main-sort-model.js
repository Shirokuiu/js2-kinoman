import AbstractModel from '@core/abstract-model';
import { SortType } from '@constants';

export default class MainSortModel extends AbstractModel {
  #activeSortType = SortType.DEFAULT;

  get activeSortType() {
    return this.#activeSortType;
  }

  set activeSortType(newSortType) {
    this.#activeSortType = newSortType;

    this.eventEmitter.emit(newSortType);
  }
}
