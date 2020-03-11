<template>
	<div class="dashboard container">
		<div class="row">
			<div class="col-12">
				<h1>Your Vaults and Created Pics</h1>
			</div>
			<!-- Create pic modal -->
			<div class="col-2">
				<button
					type="button"
					class="btn btn-primary"
					data-toggle="modal"
					data-target="#newPicModal"
					data-whatever="@getbootstrap"
				>Create Pic</button>

				<div
					class="modal fade"
					id="newPicModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="newPicModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="newPicModalLabel">New Pic</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="createKeep">
									<div class="form-group">
										<label for="vault-name" class="col-form-label">Name:</label>
										<input type="text" v-model="newKeep.name" class="form-control" id="vault-name" required />
									</div>
									<div class="form-group">
										<label for="message-text" class="col-form-label">Description:</label>
										<input type="text" v-model="newKeep.description" class="form-control" id="message-text" />
									</div>
									<div class="form-group">
										<label for="image" class="col-form-label">Image URL (Web Address):</label>
										<input type="text" v-model="newKeep.img" class="form-control" id="image" required />
									</div>
									<div class="form-group">
										<label for="is-private" class="col-form-label">Make Private?</label>
										<input type="checkbox" v-model="newKeep.isPrivate" class="form-control" id="is-private" />
									</div>
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
									<button type="submit" class="btn btn-primary">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Create vault modal -->
			<div class="col-2">
				<button
					type="button"
					class="btn btn-primary"
					data-toggle="modal"
					data-target="#newVaultModal"
					data-whatever="@getbootstrap"
				>Create Vault</button>

				<div
					class="modal fade"
					id="newVaultModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="newVaultModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="newVaultModalLabel">New Vault</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="createVault">
									<div class="form-group">
										<label for="vault-name" class="col-form-label">Name:</label>
										<input v-model="newVault.name" required type="text" class="form-control" id="vault-name" />
									</div>
									<div class="form-group">
										<label for="message-text" class="col-form-label">Description:</label>
										<input v-model="newVault.description" class="form-control" id="message-text" />
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
		<div class="row pt-3">
			<!-- insert vault components with v-for here. Placeholder vaults below -->
			<vaultComponent v-for="vault in vaults" :key="vault.id" :vaultProp="vault" />
		</div>
		<div class="row">
			<!-- Insert keep components with v-for here. Placeholder cards below -->
			<keepComponent v-for="keep in createdKeeps" :key="keep.id" :keepProp="keep" />
		</div>
	</div>
</template>

<script>
import vaultComponent from "@/components/VaultComp";
import keepComponent from "@/components/KeepComp";
export default {
	name: "dashboard",
	beforeMount() {
		this.$store.dispatch("getCreatedKeeps");
		this.$store.dispatch("getVaults");
	},
	components: {
		keepComponent,
		vaultComponent
	},
	computed: {
		createdKeeps() {
			return this.$store.state.createdKeeps;
		},
		vaults() {
			return this.$store.state.vaults;
		}
	},
	data() {
		return {
			newKeep: {
				name: "",
				description: "",
				img: "",
				isPrivate: false
			},
			newVault: {
				name: "",
				description: ""
			}
		};
	},
	methods: {
		createKeep() {
			let keepData = { ...this.newKeep };
			this.$store.dispatch("createKeep", keepData);
			this.newKeep = {
				name: "",
				description: "",
				img: "",
				isPrivate: false
			};
		},
		createVault() {
			let vaultData = { ...this.newVault };
			this.$store.dispatch("createVault", vaultData);
			this.newVault = {
				name: "",
				description: ""
			};
		}
	}
};
</script>

<style></style>
