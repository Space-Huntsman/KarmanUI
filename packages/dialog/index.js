import KuiDialog from './src/component';

/* istanbul ignore next */
KuiDialog.install = function(Vue) {
  Vue.component(KuiDialog.name, KuiDialog);
};

export default KuiDialog;
