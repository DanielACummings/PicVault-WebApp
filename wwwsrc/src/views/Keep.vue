<template>
	<div class="keep container">
		<div class="row">
			<div class="col-12 text-right mt-4">
				<h5>Edit</h5>
				<form @submit.prevent="editKeep">
					<input type="text" v-model="keepData.name" placeholder="New Name" />
					<input type="text" v-model="keepData.description" placeholder="New Description" />
					<button class="btn btn-warning" type="submit">Submit</button>
				</form>
			</div>
			<div class="col-12">
				<h1 class="pt-3">{{activeKeep.name}}</h1>
				<h5 class="pb-5">{{activeKeep.description}}</h5>
			</div>
		</div>
		<div class="row">
			<div class="col-12"></div>
		</div>
		<div class="row">
			<div class="col-4">
				<div class="card" style="width: 18rem;">
					<img src class="card-img-top" alt />
					<div class="card-body">
						<h5 class="card-title">Card Name</h5>
						<p
							class="card-text"
						>Card description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem cumque tempore.</p>
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-primary">Share</a>
						<!-- use v-show for bottom 3 depending on where the keep is being viewed -->
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
	mounted() {
		this.$store.dispatch("getActiveKeep", this.$route.params.id);
	},
	data() {
		return {
			keepData: {
				name: "",
				description: "",
				id: this.$route.params.id
			}
		};
	},
	methods: {
		editKeep() {
			let editData = { ...this.keepData };
			this.$store.dispatch("editKeep", editData);
			this.keepData = {
				name: "",
				description: "",
				id: this.$route.params.id
			};
		}
	},
	computed: {
		activeKeep() {
			return this.$store.state.activeKeep;
		}
	}
};
</script>

<style>
</style>