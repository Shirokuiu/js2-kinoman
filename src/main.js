import AppController from 'src/controllers/app-controller';

const init = () => {
  const body$ = document.querySelector('body');
  const appControllerInstance = new AppController(body$);

  appControllerInstance.render();
};

init();
