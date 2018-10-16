import { mapState, mapGetters } from 'vuex'

export default {
    name: "AppLibrary",
    computed: {
        ...mapState({
            books: state => state.bookList.books
        }),
        ...mapGetters({
            free: 'freeBooks'
        })
    },
    methods: {
        add () {
            this.$store.dispatch('addBook', {
                id: 5,
                name: 'masha',
                cost: 'free'
            })
        }
    }
}

