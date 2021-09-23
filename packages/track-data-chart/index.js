import TrackDataChart from './src/main';

/* istanbul ignore next */
TrackDataChart.install = function(Vue) {
  Vue.component(TrackDataChart.name, TrackDataChart);
};

export default TrackDataChart;
