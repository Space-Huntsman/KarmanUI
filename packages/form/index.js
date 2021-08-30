import KuiForm from './src/form';

/* istanbul ignore next */
KuiForm.install = function(Vue) {
  Vue.component(KuiForm.name, KuiForm);
};

export default KuiForm;
