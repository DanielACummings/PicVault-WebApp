<template>
	<div class="keep-comp col-4 pb-3">
		<div class="card" style="width: 18rem;">
			<img :src="keepProp.img" class="card-img-top" alt="image" />
			<div class="card-body">
				<router-link :to="{name: 'keep', params: {id: keepProp.id}}">
					<h5 class="card-title">{{keepProp.name}}</h5>
					<p>{{keepProp.description}}</p>
				</router-link>
				<div class="row">
					<div class="col-3">
						<router-link :to="{name: 'keep', params: {id: keepProp.id}}">
							<button class="btn btn-sm btn-primary">View</button>
						</router-link>
					</div>
					<div class="col-3">
						<div class="dropdown">
							<button
								v-if="this.$route.name !== 'vault'"
								class="btn btn-primary btn-sm dropdown-toggle"
								type="button"
								data-toggle="dropdown"
							>
								Keep
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<div v-for="vault in vaults" :key="vault.id">
									<button
										class="dropdown-item"
										@click="createVaultKeep(vault.id); increaseKeepsCount();"
									>{{vault.name}}</button>
								</div>
							</ul>
						</div>
					</div>
					<div class="col-3">
						<button
							v-if="this.$route.name === 'vault'"
							@click="deleteVaultKeep"
							class="btn btn-sm btn-warning"
						>Remove</button>
					</div>
					<div class="col-3">
						<button
							v-if="this.$route.name !== 'home'"
							@click="deleteKeep"
							type="delete"
							class="btn btn-sm btn-danger"
						>Delete</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12 text-center">
					Views: {{keepProp.views}} -
					Keeps: {{keepProp.keeps}}
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
		increaseKeepsCount() {
			let countData = {
				keepId: this.keepProp.id,
				view: this.$route.name
			};
			this.$store.dispatch("increaseKeepsCount", countData);
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