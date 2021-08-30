import KuiIcon from './src/icon.vue';

/* istanbul ignore next */
KuiIcon.install = function(Vue) {
  Vue.component(KuiIcon.name, KuiIcon);
};

export default KuiIcon;
