<template>
	<div class="dashboard container">
		<div class="row">
			<div class="col-12">
				<h1>Your Vaults and Created Pics</h1>
			</div>
			<div class="col-6">
				<h5>Create a Pic</h5>
				<form @submit.prevent="createKeep">
					<input type="text" v-model="newKeep.name" required placeholder="Pic name" />
					<input type="text" v-model="newKeep.description" required placeholder="Description" />
					<input type="text" v-model="newKeep.img" required placeholder="Image URL (web address)" />
					<label>
						<input type="checkbox" id="checkbox" v-model="newKeep.isPrivate" />Make private?
					</label>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
			<div class="col-6">
				<h5>Create a Vault</h5>
				<form @submit.prevent="createVault">
					<input type="text" v-model="newVault.name" required placeholder="Vault name" />
					<input type="text" v-model="newVault.description" required placeholder="Description" />
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
		<div class="row">
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
