<template>
	<view>
		<view class="top">
			<view class="lt"><text class="lt-text" @click="back"></text></view>
			<view class="center">
				<input type="text" v-model="modelValue" @confirm="searchOk" placeholder="搜索你想要的内容">
			</view>
			<view @click="back">取消</view>
		</view>
	</view>
</template>

<script>
	import { useRoute, useRouter } from 'vue-router'
	export default {
		name:"myInput",
		props: ['modelValue'],
		setup(props, ctx) {
			const router = useRouter()
			const route = useRoute()
			const back = () => {
				router.push('/pages/index/index')
			}
			
			const searchOk = (e) => {
				ctx.emit('searchOk', e.detail.value)
			}
			
			return {
				back,
				searchOk
			}
		}
	}
</script>

<style lang="scss">
.top{
	width: 100%;
	display: flex;
	border-bottom: 1px solid #eee;
	padding: 2%;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
	.center{
		width: 90%;
		input{
			width: 88%;
			height: 60rpx;
			border-radius: 60rpx;
			background: url('../../static/images/search.png') no-repeat #f0f1f2;
			background-size: 30rpx;
			padding-left: 45rpx;
			box-sizing: border-box;
			background-position: 8rpx;
		}
	}
	.lt {
		position: relative;
		margin-right: 5rpx;
		.lt-text::before {
			content: '';
			position: absolute;
			top: -6px;
			left: 3px;
			width: 10px;
			height: 10px;
			border-left: 2px solid #aaa;
			border-bottom: 2px solid #aaa;
			transform: rotate(45deg);
		}
	}
}
</style>