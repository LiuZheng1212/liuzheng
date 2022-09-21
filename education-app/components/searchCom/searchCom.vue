<template>
	<view>
		<view class="search" @click="toSearch">
			<image src="/static/images/search.png" mode=""></image> 
			<text>搜索你想要的内容</text>
		</view>
	</view>
</template>

<script>
	import { useRouter } from 'vue-router'
	export default {
		name:"searchCom",
		setup() {
			const router = useRouter()
			// 跳转搜索页面
			const toSearch = () => {
				router.push('/pages/searchView/searchView')
			}
			
			return {
				toSearch
			}
		}
	}
</script>

<style>
	.search {
		background-color: #f0f1f2;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #979ca8;
		border-radius: 40rpx;
	}
	image {
		width: 40rpx;
		height: 40rpx;
	}
</style>