
import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateItem from './components/CreateItem.vue';
import DisplayItem from './components/DisplayItem.vue';
import EditItem from './components/EditItem.vue';
import Factor from './components/factor.vue';
import Plate from './components/plate.vue';
// import navigation from './components/navBar.vue';
import index from './components/index.vue'
import echarts from 'echarts';
import Vuetify from 'vuetify';

Vue.prototype.$echarts = echarts 
Vue.use(Vuetify)
const routes = [
    {
        path: '/Factor',
        name: 'Factor',
        component: Factor
        
    },
    {
        path: '/Plate',
        name: 'Plate',
        component: Plate
    }
];

const router = new VueRouter({ routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//    render: h => h(App)
// })
