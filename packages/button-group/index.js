import KuiButtonGroup from '../button/src/button-group';

/* istanbul ignore next */
KuiButtonGroup.install = function(Vue) {
  Vue.component(KuiButtonGroup.name, KuiButtonGroup);
};

export default KuiButtonGroup;
