<template>
	<router-link :to="{name: 'vault', params: {id: vaultProp.id}}">
		<div class="vault-comp col-4 pb-3">
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title">{{vaultProp.name}}</h5>
					<p class="card-text">{{vaultProp.description}}</p>
					<button type="submit" class="btn btn-primary">View</button>
					<button @click="deleteVault" type="delete" class="btn btn-danger">Delete</button>
				</div>
			</div>
		</div>
	</router-link>
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
			let close = confirm("Delete forever?");
			if (close == true) {
				this.$store.dispatch("deleteVault", this.vaultProp.id);
			}
		}
	}
};
</script>

<style>
</style>