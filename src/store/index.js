import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        books: [
            { id: 1, name: 'book1', cost: 'free' },
            { id: 2, name: 'book2', cost: '10$' },
            { id: 3, name: 'book3', cost: 'free' },
            { id: 4, name: 'book4', cost: 'free' },
            { id: 5, name: 'book5', cost: '15$' }
        ]
    },
    getters: {
        freeBooks: state => {
            return state.books.filter(book => book.cost === 'free');
        }
    }
});

export default store;