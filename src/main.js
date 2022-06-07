import { createApp } from 'vue'
import App from './App.vue'
import i18n from './I18n';
import { BellBootstrap } from "byc-bell-vue-3-components";

// Styles
import 'vue3-carousel/dist/carousel.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '@vueform/multiselect/themes/default.css'
import './assets/styles/app.scss';

createApp(App).use(i18n).use(BellBootstrap).mount('#app')
