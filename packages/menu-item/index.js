import KuiMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
KuiMenuItem.install = function(Vue) {
  Vue.component(KuiMenuItem.name, KuiMenuItem);
};

export default KuiMenuItem;
