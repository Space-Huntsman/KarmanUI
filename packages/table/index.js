import KuiTable from './src/table';

/* istanbul ignore next */
KuiTable.install = function(Vue) {
  Vue.component(KuiTable.name, KuiTable);
};

export default KuiTable;
