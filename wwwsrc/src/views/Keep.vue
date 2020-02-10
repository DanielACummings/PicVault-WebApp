<template>
	<div class="keep container">
		<div class="row">
			<div class="col-12">Keep Name</div>
		</div>
		<div class="row">
			<div class="col-4">
				<div class="card" style="width: 18rem;">
					<img src="..." class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Card Name</h5>
						<p
							class="card-text"
						>Card description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem cumque tempore.</p>
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-primary">Share</a>
            <!-- use v-show for bottom 3 depending on whether made by someone else, made by user, or in a vault -->
						<a href="#" class="btn btn-primary">Keep</a>
						<a href="#" class="btn btn-primary">Delete</a>
						<a href="#" class="btn btn-primary">Remove</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "keep",
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
</style>