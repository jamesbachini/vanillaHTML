import { utils } from './utils.js';
import { routes } from './../js/routes.js';

export const core = {
  init: () => {
    utils.addCanonical();
    utils.loadModule('components/header.html','header');
    utils.loadModule('components/footer.html','footer');
    routes.init();
	},
};
