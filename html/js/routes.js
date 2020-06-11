import { utils } from './../core/utils.js';

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
    } else {
      await utils.loadModule('pages/home.html','content');
      utils.setTitle(`${vSettings.brand}`);
    }
    return true;
  },
}
