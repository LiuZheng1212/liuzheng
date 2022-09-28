<template>
	<view class="boxs">
		<view class="header">
			<text class="iconfont icon"  @click="$router.push('/pages/my/my')"></text>
			<text class="txt">关于梦学谷</text>
		</view>
		<view class="aside">
			<img src="../../static/images/logo-black.png" alt="">
			<view>Version 1.0.0</view>
		</view>
		<view class="us-txt">
			&emsp;&emsp;梦学谷是专注于在线教育平台，聚合了优秀教师的海量精品课程。在这里，您可以在线观看视频教程；您可以随时随地向名师请教；您可以与大量志同道合的同学进行交流。
		</view>
		<view class="us-txt">
			&emsp;&emsp;打破地域的限制，让每个立志学习，有梦想的人，都能接受优秀教师的指导和教学；同时希望给优秀的教师一个展示的平台。
		</view>
		<view class="us-txt">
			&emsp;&emsp;梦学谷——陪你学习，伴你梦想！
		</view>
		<div class="foot">
			<p>Copyright 2022 mengxuegu.com All rights reserved</p>
		</div>
	</view>
</template>

<script>
	import {
		ref,
		toRefs,
		reactive
	} from "vue"
	export default {
		setup(props, context) {
			const data = reactive({

			});


			return {
				...toRefs(data),
			}
		}
	}
</script>

<style lang="scss">
	.foot{
		width: 100%;
		position: fixed;
		bottom: 30rpx;
		p{
			font-size: 12rpx;
			text-align: center;
			color: #a29da5;
		}
	}
	.boxs{
		width: 100%;
		height: 100vh;
		background-color: #f8f9fb;
	}
	/* 头部 */
	.header {
		text-align: center;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
		.txt {
			font-weight: 800;
		}
	}
	.icon {
		position: relative;
		left: 20px;
		top: 0;
	}
	.icon::before {
		content: '';
		position: absolute;
		display: inline-block;
		width: 20rpx;
		height: 20rpx;
		border-left: 2rpx solid #000;
		border-bottom: 2rpx solid #000;
		transform: rotate(45deg);
		left: -310rpx;
		top: 10rpx;
	}
	.aside{
		text-align: center;
		margin-top: 30px;
		img{
			width: 140px;
			height: 46px;
		}
		view{
			    font-size: 15px;
			    color: #345dc2;
			    font-weight: 500;
				margin: 20px 0; 
		}
	}
	.us-txt{
		    font-size: 15px;
			margin-bottom: 10px;
			padding: 0 20px;
	}
</style>
