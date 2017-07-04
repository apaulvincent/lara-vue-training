<template>
   <div>
       <input type="text" :value="code" @input="updateCode($event.target.value)">
   </div>
</template>

<script>
    export default {
        props: ['code'],
        data() {
            return {
                coupon: 'Hello John!'
            }
        },
        methods: {
            updateCode(code) {
                this.$emit('input', code)
            }
        }
    }
</script>

<style lang="scss">
</style>
