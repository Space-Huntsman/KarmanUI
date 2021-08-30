import KuiTableColumn from '../table/src/table-column';

/* istanbul ignore next */
KuiTableColumn.install = function(Vue) {
  Vue.component(KuiTableColumn.name, KuiTableColumn);
};

export default KuiTableColumn;
