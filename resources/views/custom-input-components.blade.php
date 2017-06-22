<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>

        <div id="app">
            {{-- <input type="text" v-model="coupon" /> --}}
            {{-- <input type="text" :value="coupon" @input="coupon = $event.target.value" /> --}}

            <coupon v-model="coupon"/>
        </div>

        <script src="/js/custom-input-components.js"></script>

    </body>
</html>
