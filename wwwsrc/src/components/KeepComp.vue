<template>
	<div class="keep-comp col-4 pb-3">
		<div class="card" style="width: 18rem;">
			<img
				src="https://insights.tradestation.com/wp-content/uploads/2017/12/Crypto-1024x1024.jpg"
				class="card-img-top"
				alt="image"
			/>
			<div class="card-body">
				<h5 class="card-title">{{keepProp.name}}</h5>
				<div class="row">
					<div class="col-12">
						<a href="#" class="btn btn-primary">View</a>
						<a href="#" class="btn btn-primary">Share</a>
						<a href="#" class="btn btn-primary">Keep</a>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						Views: {{keepProp.views}}
						Shares: {{keepProp.shares}}
						Keeps: {{keepProp.keeps}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "keepComponent",
	props: ["keepProp"],
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
</style>