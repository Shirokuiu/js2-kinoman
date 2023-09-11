export default class AbstractController {
  container$;

  constructor(container$) {
    if (new.target === 'AbstractController') {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one`);
    }

    this.container$ = container$;
  }

  render() {
    throw new Error('Abstract method not implemented: getTemplate');
  }
}
