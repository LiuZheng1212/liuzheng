<template>
	<view class="my-head">
		<div class="header-cnt" @click="login">
			<div class="left">
				<img src="http://m.mengxuegu.com/static/logo.png" alt="">
				<p>请登录</p>
			</div>
			<div class="iconfont icon-right right"></div>
		</div>
	</view>

	<div class="list">
		<div class="list-item">
			<div class="left">我的订单</div>
			<div class="iconfont icon-right right"></div>
		</div>
		<div class="list-item">
			<div class="left">我的余额</div>
			<div class="iconfont icon-right right"></div>
		</div>
		<div class="list-item">
			<div class="left">我的学习</div>
			<div class="iconfont icon-right right"></div>
		</div>
	</div>
	<div class="list">
		<div class="list-item">
			<div class="left">设置</div>
			<div class="iconfont icon-right right"></div>
		</div>
		<div class="list-item">
			<div class="left">意见反馈</div>
			<div class="iconfont icon-right right"></div>
		</div>
	</div>
	<div class="about">
		<div class="left">关于我们</div>
		<div class="iconfont icon-right right"></div>
	</div>
</template>

<script setup>
	import {
		reactive,
		toRefs
	} from 'vue'

	const login = () => {
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}
	
	
</script>

<style lang="scss">
	.about {
		width: 100%;
		display: flex;
		padding: 13px 19px;
		box-sizing: border-box;
		justify-content: space-between;
		border-bottom: 0.5px solid #efeff4;
	}

	.list {
		width: 100%;
		border-bottom: 10px solid #f8f9fb;

		.list-item {
			width: 100%;
			display: flex;
			padding: 13px 19px;
			box-sizing: border-box;
			justify-content: space-between;
			border-bottom: 0.5px solid #efeff4;
		}
	}

	.right {
		font-size: 17px;
		color: #959da5;
	}

	.my-head {
		background-color: #345dc2;

		.header-cnt {
			width: 100%;
			padding: 25px 19px;
			background-color: #fff;
			border-radius: 15px 15px 0 0;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			align-items: center;
			border-bottom: 10px solid #f8f9fb;

			.left {
				display: flex;
				align-items: center;
				font-size: 19px;
				font-weight: 700;


				img {
					width: 140rpx;
					margin-right: 10px;
				}
			}
		}
	}
</style>
