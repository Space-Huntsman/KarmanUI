import OrbitElements from './src/main';

/* istanbul ignore next */
OrbitElements.install = function(Vue) {
  Vue.component(OrbitElements.name, OrbitElements);
};

export default OrbitElements;
