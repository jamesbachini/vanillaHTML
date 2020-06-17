import { utils } from './utils.js';
import { routes } from './../js/routes.js';

export const core = {
	init: async () => {
		utils.addCanonical();
		utils.loadModule('components/header.html','header');
		utils.loadModule('components/footer.html','footer');
		await routes.init();
		setTimeout(() => {
			if (document.getElementById('pixels')) utils.loadModule('components/pixels.html','pixels');
		}, 3000);
	},
};
