require('./bootstrap');

import Vue from 'vue';

// vform
import {Form, HasError, AlertError} from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// snotificaton
import Snotify, { SnotifyPosition } from 'vue-snotify'

const snotifyOptions = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(Snotify, snotifyOptions)

// vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

window.Form = Form

// Component
Vue.component('app-component', require('./components/layouts/backend/AppComponent.vue').default);

// routes
import {routes} from './routes';

const router = new VueRouter({
    routes,
    mode: 'history',
});

const app = new Vue({
    el: '#app',
    router,
});
