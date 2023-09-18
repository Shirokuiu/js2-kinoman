import AppController from '@controllers/app-controller';

const mainContainer$ = document.querySelector('body');
const appController = new AppController(mainContainer$);

appController.init();
