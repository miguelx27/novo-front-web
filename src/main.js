import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
/**
 * import locales config
 */
import i18n from './locales/i18';

createApp(App).use(i18n).mount('#app')
