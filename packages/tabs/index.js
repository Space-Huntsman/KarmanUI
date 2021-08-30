import KuiTabs from './src/tabs';

/* istanbul ignore next */
KuiTabs.install = function(Vue) {
  Vue.component(KuiTabs.name, KuiTabs);
};

export default KuiTabs;
