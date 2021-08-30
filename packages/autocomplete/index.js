import KuiAutocomplete from './src/autocomplete';

/* istanbul ignore next */
KuiAutocomplete.install = function(Vue) {
  Vue.component(KuiAutocomplete.name, KuiAutocomplete);
};

export default KuiAutocomplete;
