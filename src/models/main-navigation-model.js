import AbstractModel from '@core/abstract-model';
import { FilterType } from '@constants';

export default class MainNavigationModel extends AbstractModel {
  #activeFilterType = FilterType.ALL;

  get activeFilterType() {
    return this.#activeFilterType;
  }

  set activeFilterType(newFilterType) {
    this.#activeFilterType = newFilterType;
    this.eventEmitter.emit(newFilterType);
  }
}
