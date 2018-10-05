import Vue from 'vue';

import App from './components/App/App.vue';
import router from './router'

new Vue({
    el: '#container',
    components: { App,  },
    template: '<App/>',
    router
});