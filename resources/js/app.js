require('./bootstrap');

import Vue from 'vue';

// vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter);;

// Component
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// routes
const router = new VueRouter({
    routes: [
    ]
});

const app = new Vue({
    el: '#app',
    router: router
});