<template>
	<view class="header">
		<view class="search" @click="toSearch">
			搜索
		</view>
	</view>
</template>

<script lang="ts">
	export default {
		name: "searchInput",
		setup() {
			// 跳转搜索页
			const toSearch = () => {
				uni.navigateTo({
					url: '/pages/searchView/searchView'
				})
			}
			return {
				toSearch
			}
		}
	}
</script>

<style lang="scss">
	.header {
		padding: 10rpx;
		background-color: #d75255;

		.search {
			width: 100%;
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			background-color: #fff;
			border-radius: 20rpx;
			color: #333;
			font-size: 26rpx;
		}
	}
</style>
