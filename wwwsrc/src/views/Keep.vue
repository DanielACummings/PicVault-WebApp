<template>
	<div class="keep container">
		<div class="row">
			<div class="col-12 text-right mt-4">
				<h5>Edit</h5>
				<form @submit.prevent="editKeep">
					<input required type="text" v-model="keepData.name" placeholder="New Name" />
					<input required type="text" v-model="keepData.description" placeholder="New Description" />
					<button class="btn btn-warning" type="submit">Submit</button>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<h1 class="pt-3">{{activeKeep.name}}</h1>
				<h5 class="pb-5">{{activeKeep.description}}</h5>
			</div>
		</div>
		<div class="row">
			<div class="col-12 text-center">
				<img id="img" class="mb-3" :src="activeKeep.img" alt="image" />
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
				id: this.$route.params.id,
				views: this.$store.state.activeKeep.views,
				shares: this.$store.state.activeKeep.shares,
				keeps: this.$store.state.activeKeep.keeps
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
				id: this.$route.params.id,
				views: this.$store.state.activeKeep.views,
				shares: this.$store.state.activeKeep.shares,
				keeps: this.$store.state.activeKeep.keeps
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
#img {
	max-height: 90%;
}
</style>