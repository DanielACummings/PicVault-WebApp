<template>
	<div class="vault container">
		<div class="row">
			<div class="col-12 text-right mt-4">
				<h5>Edit Vault</h5>
				<form @submit.prevent="editVault">
					<input required type="text" v-model="vaultData.name" placeholder="New Name" />
					<input required type="text" v-model="vaultData.description" placeholder="New Description" />
					<button class="btn btn-warning" type="submit">Submit</button>
				</form>
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