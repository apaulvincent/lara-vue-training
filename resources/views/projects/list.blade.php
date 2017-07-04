{{-- @if (count($projects))
	<div class="panel">
		@foreach ($projects as $project)
			<div class="panel-body">
				<h4>{{ $project->name }}</h4>
			</div>
		@endforeach
	</div>
	<hr>
@endif --}}

<div class="panel">
	<div class="panel-body" v-for="project in projects">
		

		<h4 v-if="!isEditable">@{{ project.name }}</h4>
		<input type="text" :value="project.name" v-else class="form-control"> 
		
		<p v-if="!isEditable">@{{ project.description }}</p>
		<textarea :value="project.description" v-else class="form-control"></textarea>

		<button v-if="!isEditable" @click="editProject(project)">E</button>
		<button v-else @click="updateProject(project)">U</button>

		<button @click="deleteProject(project)">D</button>
	</div>
</div>