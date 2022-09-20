<template>
	<view>
		详情
	</view>
</template>

<script>
	import {
		getSerch
	} from "@/utils/home.js";
	import {
		reactive,
		toRefs,
		ref
	} from "vue";
	export default {
		setup(props, context) {
			console.log(props.id);
			const form = reactive({
				categoryId: props.id,
				current: 1,
				size: 10
			})
			getSerch(form).then(res => {
				console.log(res);
			})
			return {
				...toRefs(form)
			}
		}
	}
</script>

<style lang="scss">

</style>
