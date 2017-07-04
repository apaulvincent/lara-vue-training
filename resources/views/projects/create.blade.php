<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="/css/app.css">
    <style>body { padding-top: 40px; }</style>
</head>

<body>
    <div id="app" class="container">

        <div class="row">   
            <div class="col-md-4">

                <heading></heading>
            
                <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                    <div class="form-group">
                        <label for="name" class="label">Project Name:</label>
                        <input type="text" id="name" name="name" class="form-control" v-model="form.name"> 
                        <span class="danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>

                        <label for="description" class="label">Project Description:</label>
                        <textarea id="description" name="description" class="form-control" v-model="form.description" rows="6"></textarea>
                        <span class="danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
                    </div>

                    <div class="control">
                        <button class="btn btn-primary" :disabled="form.errors.any()">Create</button>
                    </div>
                </form>
            </div>

            <div class="col-md-8">
                @include ('projects.list')      
            </div>
        </div>

        

    </div>

    <script src="/js/app.js"></script>
</body>
</html>