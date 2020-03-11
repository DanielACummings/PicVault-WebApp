<template>
	<div class="vault container">
		<div class="row">
			<div class="col-12 mt-4">
				<button
					type="button"
					class="btn btn-primary"
					data-toggle="modal"
					data-target="#exampleModal"
					data-whatever="@getbootstrap"
				>Edit Vault</button>
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
								<h5 class="modal-title" id="exampleModalLabel">Edit Vault</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="editVault">
									<div class="form-group">
										<label for="vault-name" class="col-form-label">Name:</label>
										<input v-model="vaultData.name" required type="text" class="form-control" id="vault-name" />
									</div>
									<div class="form-group">
										<label for="message-text" class="col-form-label">Description:</label>
										<input
											v-model="vaultData.description"
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
			<div class="col-12">
				<h1 class="pt-3">{{activeVault.name}}</h1>
				<h5 class="pb-5">{{activeVault.description}}</h5>
			</div>
		</div>
		<div class="row">
			<keepComponent v-for="keep in keepsInVault" :key="keep.id" :keepProp="keep" />
		</div>
	</div>
</template>

<script>
import keepComponent from "../components/KeepComp";
export default {
	name: "vault",
	mounted() {
		this.$store.dispatch("getActiveVault", this.$route.params.id);
		this.$store.dispatch("getKeepsInVault", this.$route.params.id);
	},
	components: {
		keepComponent
	},
	data() {
		return {
			vaultData: {
				name: "",
				description: "",
				id: this.$route.params.id
			}
		};
	},
	methods: {
		editVault() {
			let editData = { ...this.vaultData };
			this.$store.dispatch("editVault", editData);
			this.vaultData = {
				name: "",
				description: "",
				id: this.$route.params.id
			};
		}
	},
	computed: {
		activeVault() {
			return this.$store.state.activeVault;
		},
		keepsInVault() {
			return this.$store.state.keepsInVault;
		}
	}
};
</script>

<style>
</style>