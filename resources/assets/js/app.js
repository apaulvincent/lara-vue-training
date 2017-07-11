import Vue from 'vue'
import axios from 'axios'

import Form from './core/Form'
import Errors from './core/Errors'

import Heading from './components/Heading'

window.Vue = Vue
window.axios = axios


new Vue({
    el: '#app',
    components: {
        Heading
    },
    data: {
        projects: [],
        isEditable: false,
        form: new Form({
            name: '',
            description: ''
        })
    },
    methods: {
        onSubmit () {
            this.form.submit('post', '/projects')
            .then(data => {
                this.updateData()
            })
            .catch(errors => console.log(errors))
        },
        updateData() {
            axios.get('/projects').then(response => {
                this.projects =  response.data
            })
        },
        deleteProject(project){
            axios({
                    method: 'delete',
                    url : '/projects/' + project.id
                })
                .then(response => {
                    let projectIndex = this.projects.indexOf(project)
                    this.projects.splice(projectIndex, 1)
                })
        },
        editProject(project) {
            this.isEditable = true
        },
        updateProject() {
            axios.post('/projects')
            this.isEditable = false
        }
    },  
    mounted () {
        this.updateData()
    }
});



// Shared State

// let store = {
//     name: 'Mike'
// }

// new Vue({
//     el: '#one',
//     data: store,

// })

// new Vue({
//     el: '#two',
//     data: store,
    
// })