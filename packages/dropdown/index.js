import KuiDropdown from './src/dropdown';

/* istanbul ignore next */
KuiDropdown.install = function(Vue) {
  Vue.component(KuiDropdown.name, KuiDropdown);
};

export default KuiDropdown;
