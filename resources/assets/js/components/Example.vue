<template>
   <div class="noti">
       <h3>{{ message }}</h3> 
   </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello John!'
            }
        }
    }
</script>


<style lang="scss">
    .noti {
        background: blue;

        h3 {
            color: #fff;
        }
    }
</style>
