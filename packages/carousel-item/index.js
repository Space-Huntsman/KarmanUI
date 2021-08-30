import KuiCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
KuiCarouselItem.install = function(Vue) {
  Vue.component(KuiCarouselItem.name, KuiCarouselItem);
};

export default KuiCarouselItem;
