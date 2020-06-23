<template>
	<div>
		<Component1>1</Component1>
		<Component2>2</Component2>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from "@/components/HelloWorld.vue";

	export default {
		name: "Home",
		components: {
			HelloWorld
		}
	};
</script>
