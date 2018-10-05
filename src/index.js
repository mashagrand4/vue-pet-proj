import Vue from 'vue';
import VueRouter from 'vue-router';


import App from './components/App/App.vue';

Vue.use(VueRouter);

new Vue({
    el: '#container',
    components: { App },
    template: '<App/>'
});