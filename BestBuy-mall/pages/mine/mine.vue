<template>
	<view>
		<!-- 头部 -->
		<div class="top">
			<!-- 登录按钮 -->
			<view class="login">
				登录
			</view>
		</div>
		<!-- tab栏 -->
		<div class="tab">
			<div class="item">
				<view>0</view>
				<view>收藏的店铺</view>
			</div>
			<div class="item">
				<view>0</view>
				<view>收藏的商品</view>
			</div>
			<div class="item">
				<view>0</view>
				<view>关注的商品</view>
			</div>
			<div class="item">
				<view>0</view>
				<view>我的足迹</view>
			</div>
		</div>
		<div class="content">
			<!-- 订单部分 -->
			<div class="order-box">
				<!-- 订单标题 -->
				<div class="order-title">我的订单</div>
				<!-- 订单列表 -->
				<div class="order-list">
					<div class="order-item">
						<image src="../../static/订单.png" mode=""></image>
						<view>全部订单</view>
					</div>
					<div class="order-item">
						<image src="../../static/待付款.png" mode=""></image>
						<view>待付款</view>
					</div>
					<div class="order-item">
						<image src="../../static/待收货.png" mode=""></image>
						<view>待收货</view>
					</div>
					<div class="order-item">
						<image src="../../static/退款.png" mode=""></image>
						<view>退款/退货</view>
					</div>
				</div>
			</div>
			<div class="row" style="margin-top: 20rpx;">收货地址管理</div>
			<div class="row" style="margin-top: 20rpx;">
				<text>联系客服</text>
				<text>400-618-4000</text>
			</div>
			<div class="row">意见反馈</div>
			<div class="row">关于我们</div>
			<div class="row" style="margin-top: 20rpx;">把应用推荐给其他人</div>
		</div>

	</view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
	.row {
		height: 80rpx;
		line-height: 80rpx;
		width: 87%;
		background-color: white;
		margin-left: 50rpx;
		border-bottom: 4rpx solid #ddd;
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
	}

	.content {
		height: 72vh;
		overflow: hidden;
		background-color: #edece8;

		.order-box {
			margin-top: 80rpx;
			width: 87%;
			background-color: white;
			margin-left: 50rpx;

			.order-title {
				padding: 20rpx;
				border-bottom: 4rpx solid #ddd;
			}

			.order-list {
				padding: 16rpx 0;
				display: flex;
				justify-content: space-around;
				text-align: center;

				.order-item {
					image {
						width: 45rpx;
						height: 45rpx;
					}
				}
			}
		}
	}

	.top {
		overflow: hidden;
		background-color: #d75255;
		height: 300rpx;

		.login {
			width: 120rpx;
			padding: 20rpx 30rpx;
			color: #b0fd2e;
			border-radius: 5rpx;
			border: solid 2rpx #b0fd2e;
			margin: 50rpx auto;
			text-align: center;
		}
	}

	.tab {
		display: flex;
		width: 87%;
		position: absolute;
		height: 100rpx;
		top: 250rpx;
		left: 50rpx;
		background-color: white;
		justify-content: space-around;
		text-align: center;
		padding: 10rpx 0;

		.item {
			view:nth-of-type(1) {
				color: #d75255;
			}
		}
	}
</style>
