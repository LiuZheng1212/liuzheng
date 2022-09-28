<template>
	<view class="content">
		<p>商品信息</p>
	</view>
</template>

<script>
	import { useRoute, useRouter } from 'vue-router'
	import { reactive, toRefs } from 'vue'
	export default {
		setup() {
			const route = useRoute()
			
			const data = reactive({
				list: []
			})
			data.list = JSON.parse(route.query.list)
			console.log(data.list);
			
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 20rpx;
	}
</style>