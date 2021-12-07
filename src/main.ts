import { createApp } from 'vue';
import router from "@src/router";
import store from "@src/store";
import App from '@src/App.vue';
// import "@src/styles/common.scss";

createApp(App)
.use(router)
.use(store)
.mount('#app');
