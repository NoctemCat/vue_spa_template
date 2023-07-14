import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from 'vue-i18n';

import App from "./App.vue";
import router from "./router";

const i18n = createI18n({
  locale: 'ru', // set locale
  fallbackLocale: 'en', // set fallback locale
});


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
