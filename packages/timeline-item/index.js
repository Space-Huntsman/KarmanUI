import KuiTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
KuiTimelineItem.install = function(Vue) {
  Vue.component(KuiTimelineItem.name, KuiTimelineItem);
};

export default KuiTimelineItem;
