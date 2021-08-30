import KuiTag from './src/tag';

/* istanbul ignore next */
KuiTag.install = function(Vue) {
  Vue.component(KuiTag.name, KuiTag);
};

export default KuiTag;
