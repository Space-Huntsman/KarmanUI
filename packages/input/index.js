import KuiInput from './src/input';

/* istanbul ignore next */
KuiInput.install = function(Vue) {
  Vue.component(KuiInput.name, KuiInput);
};

export default KuiInput;
