<template>
	<div class="keep-comp col-4 pb-3">
		<div class="card" style="width: 18rem;">
			<img :src="keepProp.img" class="card-img-top" alt="image" />
			<div class="card-body">
				<h5 class="card-title">{{keepProp.name}}</h5>
				<div class="row">
					<div class="col-12">
						<button type="submit" class="btn btn-primary">View</button>
						<button type="submit" class="btn btn-primary">Share</button>
						<button type="submit" class="btn btn-primary">Keep</button>
						<button type="submit" class="btn btn-warning">Remove</button>
						<button @click="deleteKeep" type="delete" class="btn btn-danger">Delete</button>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						Views: {{keepProp.views}} -
						Shares: {{keepProp.shares}} -
						Keeps: {{keepProp.keeps}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "keepComponent",
	props: ["keepProp"],
	data() {
		return {
			keepId: this.keepProp.id
		};
	},
	methods: {
		deleteKeep(id) {
			let close = confirm("Delete forever?");
			if (close == true) {
				this.$store.dispatch("deleteKeep", this.keepProp.id);
			}
		}
	}
};
</script>

<style>
</style>