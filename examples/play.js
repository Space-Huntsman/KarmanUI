import Vue from 'vue';
import Karman from 'main/index.js';
import App from './play/index.vue';
import 'theme/default/src/index.scss';

Vue.use(Karman);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
