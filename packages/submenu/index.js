import KuiSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
KuiSubmenu.install = function(Vue) {
  Vue.component(KuiSubmenu.name, KuiSubmenu);
};

export default KuiSubmenu;
