require('./bootstrap');

import Vue from 'vue';

// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import vueStore from './vuex'
const store = new Vuex.Store(
    vueStore
)

// vform
import { Form, HasError, AlertError } from 'vform'
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

// tinymce text editor
import tinymce from 'vue-tinymce-text-editor'
Vue.component('tinymce', tinymce)

// vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
window.Form = Form

// moment js
import moment from 'moment';
moment().format();

// vue filter
import filter from './filter';

// Component
Vue.component('app-component', require('./components/layouts/backend/AppComponent.vue').default);

// routes
import { routes } from './routes';

const router = new VueRouter({
    routes,
    // mode: 'hash',
    mode: 'history',
});

const app = new Vue({
    el: '#app',
    router,
    store,
});
