import { mapState, mapGetters } from 'vuex'

import Input from '../shared/form-controls/Input'

export default {
    name: "AppLibrary",
    components: {
        'ui-input': Input
    },
    computed: {
        ...mapState({
            books: state => state.bookList.books
        }),
        ...mapGetters({
            free: 'freeBooks'
        })
    },
    data: {
        name: '',
        cost: ''
    },
    methods: {
        add () {
            this.$store.dispatch('addBook', {
                id: 10,
                name: this.name,
                cost: this.cost
            })
        },
        nameChanged(value) {
            this.name = value;
        },
        costChanged(value) {
            this.cost = value;
        }
    }
}

