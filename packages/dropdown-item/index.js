import KuiDropdownItem from '../dropdown/src/dropdown-item';

/* istanbul ignore next */
KuiDropdownItem.install = function(Vue) {
  Vue.component(KuiDropdownItem.name, KuiDropdownItem);
};

export default KuiDropdownItem;
