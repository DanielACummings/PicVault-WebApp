<template>
	<div class="keep-comp col-4 pb-3">
		<div class="card" style="width: 18rem;">
			<img :src="keepProp.img" class="card-img-top" alt="image" />
			<div class="card-body">
				<h5 class="card-title">{{keepProp.name}}</h5>
				<p>{{keepProp.description}}</p>
				<div class="row">
					<div class="col-12">
						<router-link :to="{name: 'keep', params: {id: keepProp.id}}">
							<button class="btn btn-primary">View</button>
						</router-link>
						<button type="submit" class="btn btn-primary">Share</button>
						<div class="dropdown">
							<button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
								Keep
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<div v-for="vault in vaults" :key="vault.id">
									<button class="dropdown-item" @click="createVaultKeep(vault.id)">{{vault.name}}</button>
								</div>
							</ul>
						</div>
						<button @click="deleteVaultKeep" class="btn btn-warning">Remove</button>
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
	computed: {
		vaults() {
			return this.$store.state.vaults;
		}
	},
	methods: {
		createVaultKeep(vaultId) {
			let addData = {
				vaultId: vaultId,
				keepId: this.keepProp.id
			};
			this.$store.dispatch("createVaultKeep", addData);
		},
		deleteVaultKeep() {
			let close = confirm("Remove from vault?");
			if (close == true) {
				let deleteData = {
					vaultId: this.$route.params.id,
					keepId: this.keepProp.id
				};
				this.$store.dispatch("deleteVaultKeep", deleteData);
			}
		},
		deleteKeep() {
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