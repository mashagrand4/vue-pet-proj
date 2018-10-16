export default {
    addBook({state, commit}, data) {
        commit('pushBookToList', {
            id: data.id,
            name: data.name,
            cost: data.cost
        })
    }
}