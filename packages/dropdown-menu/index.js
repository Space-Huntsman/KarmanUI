import KuiDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
KuiDropdownMenu.install = function(Vue) {
  Vue.component(KuiDropdownMenu.name, KuiDropdownMenu);
};

export default KuiDropdownMenu;
