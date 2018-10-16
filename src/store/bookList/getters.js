export default {
    freeBooks: state => {
        return state.books.filter(book => book.cost === 'free');
    }
}