<template>
	<div class="home container">
		<div class="row">
			<div class="col">
				<h1>Public Keeps</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-4 pb-3">
				<!-- Insert keep components with v-for here. Placeholder cards below -->
				<div class="card" style="width: 18rem;">
					<img
						src="https://insights.tradestation.com/wp-content/uploads/2017/12/Crypto-1024x1024.jpg"
						class="card-img-top"
						alt="image"
					/>
					<div class="card-body">
						<h5 class="card-title">Pic Name</h5>
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-primary">Share</a>
						<a href="#" class="btn btn-primary">Keep</a>
					</div>
				</div>
			</div>
			<div class="col-4 pb-3">
				<div class="card" style="width: 18rem;">
					<img
						src="https://insights.tradestation.com/wp-content/uploads/2017/12/Crypto-1024x1024.jpg"
						class="card-img-top"
						alt="image"
					/>
					<div class="card-body">
						<h5 class="card-title">Pic Name</h5>
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-primary">Share</a>
						<a href="#" class="btn btn-primary">Keep</a>
					</div>
				</div>
			</div>
			<div class="col-4 pb-3">
				<div class="card" style="width: 18rem;">
					<img
						src="https://insights.tradestation.com/wp-content/uploads/2017/12/Crypto-1024x1024.jpg"
						class="card-img-top"
						alt="image"
					/>
					<div class="card-body">
						<h5 class="card-title">Pic Name</h5>
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-primary">Share</a>
						<a href="#" class="btn btn-primary">Keep</a>
					</div>
				</div>
			</div>
			<div class="col-4 pb-3">
				<div class="card" style="width: 18rem;">
					<img
						src="https://insights.tradestation.com/wp-content/uploads/2017/12/Crypto-1024x1024.jpg"
						class="card-img-top"
						alt="image"
					/>
					<div class="card-body">
						<h5 class="card-title">Pic Name</h5>
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-primary">Share</a>
						<a href="#" class="btn btn-primary">Keep</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "home",
	computed: {
		user() {
			return this.$store.state.user;
		}
	},
	methods: {
		logout() {
			this.$store.dispatch("logout");
		}
	}
};
</script>
