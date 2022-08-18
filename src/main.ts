import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import './assets/styles/common.css';
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
// import HeroIcon from 'vue-heroicons'
// import { archive, arrowDown } from 'vue-heroicons/src/icons'
// HeroIcon.add([archive, arrowDown])

const app = createApp(App);
axios.defaults.withCredentials = true;
app.config.globalProperties.$axios = axios.create({
    timeout: 60000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

app.use(store);
// app.use(HeroIcon)
app.use(Vue3ColorPicker)
app.mount('#app');

