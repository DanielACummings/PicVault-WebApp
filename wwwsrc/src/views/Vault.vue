<template>
	<div class="vault container">
		<div class="row">
			<div class="col-12">
				<h1>{{activeVault.name}}</h1>
				<h5>{{activeVault.description}}</h5>
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