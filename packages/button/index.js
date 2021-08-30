import KuiButton from './src/button';

/* istanbul ignore next */
KuiButton.install = function(Vue) {
  Vue.component(KuiButton.name, KuiButton);
};

export default KuiButton;
