import KuiBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
KuiBreadcrumb.install = function(Vue) {
  Vue.component(KuiBreadcrumb.name, KuiBreadcrumb);
};

export default KuiBreadcrumb;
