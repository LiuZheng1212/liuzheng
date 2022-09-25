<template>
	<view>
		<view class="top">
			<text @click="back" class="back">&lt;</text>
			<view class="center">
				<input type="text" placeholder="搜索你想要的内容">
			</view>
			<text @click="back">
			取消
			</text>
		</view>
	</view>
</template>

<script>
	import {useRouter} from 'vue-router'
	export default {
		name:"myInput",
		setup() {
			const router=useRouter()
			const back=()=>{
				console.log(1);
				router.go(-1)
			}
			return {
				back
			}
		}
	}
</script>

<style lang="scss">
	.back{
		font-size: 60rpx;
		color: gray;
		position: relative;
		top: -5rpx;
	}
.top{
	width: 100%;
	display: flex;
	border-bottom: 1px solid #eee;
	padding: 2%;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
	.center{
		width: 84%;
		input{
			height: 60rpx;
			border-radius: 60rpx;
			padding-left: 20rpx;
			background: url('../../static/images/search.png') no-repeat #f0f1f2;
			background-size: 30rpx;
			padding-left: 45rpx;
			background-position: 6rpx;
		}
	}
}
</style>