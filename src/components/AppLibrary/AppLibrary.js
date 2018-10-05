export default {
    name: "AppLibrary",
    computed: {
        allBooks () {
            return this.$store.state.books;
        }
    }
}

