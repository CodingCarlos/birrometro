import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.use(Vuetify, {
  theme: {
    primary: '#ffb91d',
    secondary: '#20487d',
    accent: '#CE82EA',
    error: '#FF5252',
    info: '#CE82EA',
    success: '#4CAF50',
    warning: '#3F005D',
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
