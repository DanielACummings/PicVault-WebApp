<template>
	<div class="home container">
		<div class="row">
			<div class="col">
				<h1 class="pb-5 pt-4">Public Keeps</h1>
			</div>
		</div>
		<div class="row">
			<!-- public keeps inserted here -->
			<keepComponent v-for="keep in publicKeeps" :key="keep.id" :keepProp="keep" />
		</div>
	</div>
</template>

<script>
import keepComponent from "@/components/KeepComp";
export default {
	name: "home",
	mounted() {
		this.$store.dispatch("getPublicKeeps");
	},
	components: {
		keepComponent
	},
	computed: {
		user() {
			return this.$store.state.user;
		},
		publicKeeps() {
			return this.$store.state.publicKeeps;
		}
	}
};
</script>
