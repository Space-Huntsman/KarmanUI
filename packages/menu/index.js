import KuiMenu from './src/menu';

/* istanbul ignore next */
KuiMenu.install = function(Vue) {
  Vue.component(KuiMenu.name, KuiMenu);
};

export default KuiMenu;
