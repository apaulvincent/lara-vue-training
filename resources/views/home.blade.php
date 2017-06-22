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
            <ul>
                <li v-for="skill in skills">@{{ skill }}</li>
            </ul>
        </div>

        <script src="/js/app.js"></script>

    </body>
</html>
