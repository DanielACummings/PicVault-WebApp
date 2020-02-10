<template>
	<div class="dashboard container">
		<div class="row">
			<div class="col-12">
				<h1>Your Vaults and Created Pics</h1>
				<!-- vault count {{ vaultCount }} Pics {{ picCount }} -->
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
							<a href="#" class="btn btn-danger">Delete</a>
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
							<a href="#" class="btn btn-danger">Delete</a>
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
							<a href="#" class="btn btn-danger">Delete</a>
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
							<a href="#" class="btn btn-danger">Delete</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {},
	computed: {}
};
</script>

<style></style>
