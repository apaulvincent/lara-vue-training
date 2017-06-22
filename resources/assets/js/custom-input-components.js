import Vue from 'vue'
import axios from 'axios'
import Coupon from './components/Coupon'


window.Vue = Vue
window.axios = axios


new Vue({
    el: '#app',
    components: {
        Coupon
    },
    data: {
        coupon: 'FREEBIE'
    },
    methods: {
    },
    mounted () {
    }
});
