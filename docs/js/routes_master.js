import { utils } from './../core/utils.js';
/* global vSettings */

export const routes = {
	init: async () => {
		const get = utils.getQueryParams();
		if (get.page && get.page === 'home') {
			await utils.loadModule('pages/home.html','content');
			utils.setTitle(`${vSettings.brand}`);
		} else if (get.page && get.page === 'terms') {
			await utils.loadModule('pages/terms.html','content', (pageContent) => {
				return pageContent.split('[brand]').join(vSettings.brand);
			});
			utils.setTitle(`${vSettings.brand} Terms and Conditions`);
		} else if (get.page && get.page === 'privacy') {
			await utils.loadModule('pages/privacy.html','content', (pageContent) => {
				return pageContent.split('[brand]').join(vSettings.brand);
			});
			utils.setTitle(`${vSettings.brand} Privacy Policy`);
		} else if (get.page && get.page === 'components') {
			await utils.loadModule('pages/components.html','content');
			utils.setTitle(`${vSettings.brand} Components | HTML Component Library`);
			utils.setDescription(`Single file HTML components which can be dragged into any HTML, CSS, JS boilerplate or project.`);
		} else if (get.page && get.page === 'templates') {
			await utils.loadModule('pages/templates.html','content');
			utils.setTitle(`${vSettings.brand} Templates | HTML Template Library`);
			utils.setDescription(`Drag and drop HTML templates which you can use as standalone files or as pages within a VanillaHTML boilerplate`);
		} else if (get.page && get.page === 'templates-blog') {
			await utils.loadModule('templates/blog.html','content');
			utils.setTitle(`${vSettings.brand} Blog | HTML Blog Template`);
			utils.setDescription(`A VanillaHTML single file template for a personal blog. Use this to create your little corner of the web.`);
		} else {
			await utils.loadModule('pages/home.html','content');
			utils.setTitle(`${vSettings.brand} | HTML Boilerplate`);
			utils.setDescription(`VanillaHTML is the best boilerplate template for websites and web development projects in ${new Date().getFullYear()}. Built with elegantly simple HTML/CSS/JS`);
		}
		return true;
	},
}
