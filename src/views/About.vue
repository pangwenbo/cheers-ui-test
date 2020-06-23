<template>
	<div>
		<h2>Demo</h2>
		<testB></testB>
		<testA></testA>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				color: "#ff0000"
			};
		},
		methods: {
			headleChangeColor(color) {
				console.log(`颜色值改变事件：${color}`);
			}
		}
	};
</script>

<style lang="sass">
</style>
  