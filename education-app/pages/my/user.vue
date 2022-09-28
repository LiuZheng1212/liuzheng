<template>
	<view class="content">
		<view class="top">
			<view class="item">
				<view class="left">
					<text>头像</text>
				</view>
				<view class="right">
					<image :src="data.token ? data.userList.imageUrl : 'http://m.mengxuegu.com/static/logo.png'" mode=""></image>
					<text class="lt1"></text>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<text>用户名</text>
				</view>
				<view class="right">
					<text>{{ data.userList.username }}</text>
					<text class="lt"></text>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<text>手机号</text>
				</view>
				<view class="right">
					<text>{{ data.userList.mobile }}</text>
					<text class="lt"></text>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="item">
				<view class="left">
					<text>昵称</text>
				</view>
				<view class="right">
					<text>{{ data.userList.nickName }}</text>
					<text class="lt"></text>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<text>性别</text>
				</view>
				<view class="right">
					<text>{{ data.userList.sex ? '女' : '男' }}</text>
					<text class="lt"></text>
				</view>
			</view>
		</view>
		<button class="btn" @click="backLogin">退出登录</button>
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue'
	const data = reactive({
		userList: [],
		token: ''
	})
	data.userList = JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) : []
	data.token = localStorage.getItem('mxgEducationToken') ? localStorage.getItem('mxgEducationToken') : ''
	if(!data.token) {
		uni.navigateTo({
			url: '/pages/loginView/loginView'
		})
	}
	const backLogin = () => {
		uni.showModal({
			title: '确定退出登录？',
			content: '退出后不会删除任何历史数据',
			success: function (res) {
				if(res.confirm) {
					localStorage.clear()
					uni.navigateBack({})
					uni.showToast({
						icon: 'success',
						title: '退出成功'
					})
				} else if(res.cancel) {
					
				}
			}
		})
	}
	
</script>

<style lang="scss">
	.content {
		.btn {
			margin-top: 20rpx;
			background-color: #fff;
		}
		background-color: #f8f9fb;
		min-height: 93vh;
		.top,.bottom {
			background-color: #fff;
			margin-top: 20rpx;
			.item {
				padding: 30rpx 20rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #eee;
				.right {
					color: #959da5;
					font-size: 17px;
					margin-right: 35rpx;
					image {
						width: 130rpx;
						height: 130rpx;
						border-radius: 50%;
					}
					.lt {
						position: relative;
					}
					
					.lt::before {
						content: '';
						width: 15rpx;
						height: 15rpx;
						border-right: 2px solid #959da5;
						border-bottom: 2px solid #959da5;
						display: inline-block;
						position: absolute;
						top: 8px;
						right: -15px;
						transform: rotate(-45deg);
					}
					.lt1 {
						position: relative;
					}
					.lt1::before {
						content: '';
						width: 15rpx;
						height: 15rpx;
						border-right: 2px solid #959da5;
						border-bottom: 2px solid #959da5;
						display: inline-block;
						position: absolute;
						top: -13px;
						right: -15px;
						transform: rotate(-45deg);
					}
					
				}
				
			}
		}
	}
</style>
