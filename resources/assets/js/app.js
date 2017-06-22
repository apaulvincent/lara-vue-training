import Vue from 'vue'
import axios from 'axios'

import Form from './core/Form'
import Errors from './core/Errors'

import Example from './components/Example'

window.Vue = Vue
window.axios = axios


new Vue({
    el: '#app',
    components: {
        Example
    },
    data: {
        skills: [],
        form: new Form({
            name: '',
            description: ''
        })
    },
    methods: {
        onSubmit () {
            this.form.submit('post', '/projects')
            .then(data => console.log(data))
            .catch(errors => console.log(errors))
        }
    },
    mounted () {
        axios.get('/skills').then(response => this.skills = response.data)
    }
});



// Shared State

let store = {
    name: 'Mike'
}

new Vue({
    el: '#one',
    data: store,

})

new Vue({
    el: '#two',
    data: store,
    
})