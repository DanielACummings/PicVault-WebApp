<template>
	<div class="keep container">
		<div class="row">
			<div v-if="$auth.isAuthenticated" class="col-12 mt-4">
				<button
					type="button"
					class="btn btn-primary"
					data-toggle="modal"
					data-target="#exampleModal"
					data-whatever="@getbootstrap"
				>Edit Pic</button>
				<div
					class="modal fade"
					id="exampleModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Edit Pic</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="editKeep">
									<div class="form-group">
										<label for="pic-name" class="col-form-label">Name:</label>
										<input v-model="keepData.name" required type="text" class="form-control" id="pic-name" />
									</div>
									<div class="form-group">
										<label for="message-text" class="col-form-label">Description:</label>
										<input
											v-model="keepData.description"
											required
											type="text"
											class="form-control"
											id="message-text"
										/>
									</div>
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
									<button type="submit" class="btn btn-primary">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
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
#img {
	max-height: 90%;
}
</style>