import KuiProgress from './src/progress';

/* istanbul ignore next */
KuiProgress.install = function(Vue) {
  Vue.component(KuiProgress.name, KuiProgress);
};

export default KuiProgress;
