import KuiCol from './src/col';

/* istanbul ignore next */
KuiCol.install = function(Vue) {
  Vue.component(KuiCol.name, KuiCol);
};

export default KuiCol;

