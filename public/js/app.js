new Vue({
    el: '#app',

    data: {
        name: '',
        description: '',
        errors: {}
    },

    methods: {
        onSubmit () {
            axios.post('/projects', this.$data)
                .then(res => alert('success'))
                .catch(err => {
                    this.errors = err.response.data
                })
        }
    }
});