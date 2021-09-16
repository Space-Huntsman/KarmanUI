import SatellitePoint from './src/main';

/* istanbul ignore next */
SatellitePoint.install = function(Vue) {
  Vue.component(SatellitePoint.name, SatellitePoint);
};

export default SatellitePoint;
