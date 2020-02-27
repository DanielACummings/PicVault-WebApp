<template>
	<div class="vault-comp col-4 pb-3">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<router-link :to="{name: 'vault', params: {id: vaultProp.id}}">
					<h5 class="card-title">{{vaultProp.name}}</h5>
					<p class="card-text pb-3">{{vaultProp.description}}</p>
					<button type="submit" class="btn btn-primary">View</button>
				</router-link>
				<button @click="deleteVault" type="delete" class="btn btn-danger">Delete</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "vault-comp",
	props: ["vaultProp"],
	data() {
		return {
			vaultId: this.vaultProp.id
		};
	},
	methods: {
		deleteVault(id) {
			let close = confirm("Are you sure you want to delete this?");
			if (close == true) {
				this.$store.dispatch("deleteVault", this.vaultProp.id);
			}
		}
	}
};
</script>

<style>
</style>