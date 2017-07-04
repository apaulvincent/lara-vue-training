import Errors from './Errors'

class Form {

    constructor(data) {

        /**
         * keep original data for later use.
         */

        this.originalData = data

        for(let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors()
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = ''
        }

        this.errors.clear()
    }

    data () {

        let data = {}

        for ( let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    submit(requestType, url) {

        return new Promise((resolve, reject) => {

            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data)

                    resolve(response)
                })
                .catch(error => {
                    this.onFail(error.response.data)

                    reject(error.response.data)
                })
        })
    }

    onSuccess(data) {

        // alert(data.message)

        this.reset();
    }

    onFail(err) {
        this.errors.record(err)
    }
}

export default Form