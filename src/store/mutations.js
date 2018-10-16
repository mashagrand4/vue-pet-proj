import * as mutationTypes from 'mutation-types';

export default {
    [mutationTypes.ADD_NEW_BOOK](state, payload) {
        state.books.push(payload);
    },
};