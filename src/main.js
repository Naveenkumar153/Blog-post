import { createApp } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue'
import router from './router'
import store from './store'

library.add(fas,fab);
const app = createApp(App);
app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
