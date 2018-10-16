import Vue from 'vue';
import Vuex from 'vuex';

import bookList from './bookList'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        bookList
    }
});

export default store;