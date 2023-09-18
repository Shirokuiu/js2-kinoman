export default class AbstractController {
  container$;

  constructor(container$) {
    if (new.target === 'AbstractController') {
      throw new Error(`Can't instantiate AbstractController, only concrete one`);
    }

    this.container$ = container$;
  }

  init() {
    throw new Error('Abstract method not implemented: init');
  }
}
