<template>
	<div class="dashboard container">
		<div class="row">
			<div class="col-6">
				<h1>Your Vaults and Created Pics</h1>
				<!-- vault count {{ vaultCount }} Pics {{ picCount }} -->
			</div>
			<div class="col-12">
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
		</div>
		<div class="row">
			<!-- insert vault components with v-for here. Placeholder vaults below -->
			<div class="col-4 pb-3">
				<div class="card" style="width: 18rem;">
					<div class="card-body">
						<h5 class="card-title">Vault Name</h5>
						<p
							class="card-text"
						>Vault description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem cumque tempore.</p>
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-danger">Delete</a>
					</div>
				</div>
			</div>
			<div class="col-4 pb-3">
				<div class="card" style="width: 18rem;">
					<div class="card-body">
						<h5 class="card-title">Vault Name</h5>
						<p
							class="card-text"
						>Vault description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem cumque tempore.</p>
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-danger">Delete</a>
					</div>
				</div>
			</div>
			<div class="col-4 pb-3">
				<div class="card" style="width: 18rem;">
					<div class="card-body">
						<h5 class="card-title">Vault Name</h5>
						<p
							class="card-text"
						>Vault description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem cumque tempore.</p>
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-danger">Delete</a>
					</div>
				</div>
			</div>
			<div class="col-4 pb-3">
				<div class="card" style="width: 18rem;">
					<div class="card-body">
						<h5 class="card-title">Vault Name</h5>
						<p
							class="card-text"
						>Vault description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem cumque tempore.</p>
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-danger">Delete</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<!-- Insert keep components with v-for here. Placeholder cards below -->
			<keepComponent v-for="keep in privateKeeps" :key="keep.id" :keepProp="keep" />
		</div>
	</div>
</template>

<script>
import keepComponent from "@/components/KeepComp";
export default {
	name: "dashboard",
	mounted() {
		this.$store.dispatch("getCreatedKeeps");
	},
	components: {
		keepComponent
	},
	computed: {
		privateKeeps() {
			return this.$store.state.privateKeeps;
		}
	},
	data() {
		return {
			newKeep: {
				name: "",
				description: "",
				img: "",
				isPrivate: false
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
		}
	}
};
</script>

<style></style>
