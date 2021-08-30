import KuiOption from '../select/src/option';

/* istanbul ignore next */
KuiOption.install = function(Vue) {
  Vue.component(KuiOption.name, KuiOption);
};

export default KuiOption;
