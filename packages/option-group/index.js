import KuiOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
KuiOptionGroup.install = function(Vue) {
  Vue.component(KuiOptionGroup.name, KuiOptionGroup);
};

export default KuiOptionGroup;
