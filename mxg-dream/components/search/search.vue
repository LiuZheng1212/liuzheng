<template>
	<view class="top" :style="`background-color: ${Background}`">
		<view @click="toSearch" class="ipt">
			<image src="../../static/images/search.png" mode=""></image>
			<text>搜索你想要的内容</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:['Background'],
		setup(){
			const toSearch=()=>{
				uni.navigateTo({
					url:"/pages/searchView/searchView"
				})
			}
			return {
				toSearch
			}
		}
	}
</script>

<style lang="scss">
.ipt{
	width: 96%;
	margin-left: 2%;
	height: 60rpx;
	background-color: #fff;
	border-radius: 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #bebebe;
	font-size: 30rpx
	
}
image {
		width: 28rpx;
		height: 28rpx;
	}
.top{
		width: 100%;
		height: 35rpx;
		background-color: #345dc2;
		padding-top: 2%;
		padding-bottom: 6%;
	}
</style>