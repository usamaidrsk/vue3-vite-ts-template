import { createApp } from 'vue';
import App from '@/App.vue';
import { key, store } from './store';
import router from './router';
import VueAxios from 'vue-axios';
import axios from './plugins/axios';
import vuetify from '@/plugins/vuetify';

const app = createApp(App);
app.config.performance = true;
app.use(store, key).use(router).use(VueAxios, axios).use(vuetify).mount('#app');
