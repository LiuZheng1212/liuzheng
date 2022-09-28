<template>
	<view>
		<view class="box">
			<view class="login-box" @click="toLogin">
				<view class="img-box">
					<view class="left">
						<image :src="!token ? 'http://m.mengxuegu.com/static/logo.png' : userList.imageUrl" mode=""></image>
					</view>
					<view class="text" v-if="!token">
						请登录
					</view>
					<view class="text1" v-else>
						<h3>{{ userList.nickName }}</h3>
						<p>用户名：{{ userList.username }}</p>
					</view>
				</view>
				<view class="right">
				</view>
			</view>
		</view>

		<view class="dir-box" @click="toOrder">
			<view class="left">
				我的订单
			</view>
			<view class="right">
			</view>
		</view>
		<view class="dir-box" @click="toBalance">
			<view class="left">
				我的余额
			</view>
			<view class="right">
			</view>
		</view>
		<view class="dir-box" @click="toStudy">
			<view class="left">
				我的学习
			</view>
			<view class="right">
			</view>
		</view>
		<view class="dir-box" @click="toSetting">
			<view class="left">
				设置
			</view>
			<view class="right">
			</view>
		</view>
		<view class="dir-box" @click="toFeedback">
			<view class="left">
				意见反馈
			</view>
			<view class="right">
			</view>
		</view>
		<view class="dir-box" @click="toAbout">
			<view class="left">
				关于我们
			</view>
			<view class="right">
			</view>
		</view>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from 'vue'
	import { useRouter } from 'vue-router'
	export default {
		setup() {
			
			const router = useRouter()
			
			const data = reactive({
				userList: [],
				token: ''
			})

			// 跳转登录页
			const toLogin = () => {
				if(!data.token) {
					uni.navigateTo({
						url: '/pages/loginView/loginView'
					})
				} else {
					uni.navigateTo({
						url: '/pages/my/user'
					})
				}
			}
			// 跳转订单
			const toOrder = () => {
				if(!data.token) {
					uni.navigateTo({
						url: '/pages/loginView/loginView'
					})
				} else {
					uni.navigateTo({
						url: '/pages/order/order'
					})
				}
			}
			
			// 跳转我的余额
			const toBalance = () => {
				if(!data.token) {
					uni.navigateTo({
						url: '/pages/loginView/loginView'
					})
				} else {
					router.push('/pages/order/mybalance')
				}
			}
			
			// 跳转我的余额
			const toStudy = () => {
				if(!data.token) {
					uni.navigateTo({
						url: '/pages/loginView/loginView'
					})
				} else {
					router.push('/pages/my/study')
				}
			}
			
			// 跳转我的余额
			const toSetting = () => {
				router.push('/pages/my/setting')
			}
			
			// 跳转意见反馈
			const toFeedback= () => {
				router.push('/pages/my/feedback')
			}
			
			// 跳转关于我们
			const toAbout = () => {
				router.push('/pages/my/about')
			}


			return {
				...toRefs(data),
				toLogin,
				toOrder,
				toBalance,
				toStudy,
				toSetting,
				toFeedback,
				toAbout
			}
		},
		onShow() {
			this.userList = JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) :
			[]
			this.token = localStorage.getItem('mxgEducationToken') ? localStorage.getItem('mxgEducationToken') : ''
		}
	}
</script>

<style lang="scss">
	.dir-box {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 3% 4%;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;

		.right {
			position: relative;
		}

		.right::before {
			position: absolute;
			content: '';
			display: inline-block;
			width: 15rpx;
			height: 15rpx;
			border-bottom: 1px solid #333;
			border-right: 1px solid #333;
			transform: rotate(-45deg);
			top: 10px;
			right: 10px;
		}
	}

	.box {
		width: 100%;
		background-color: #345dc2;

		.login-box {
			width: 100%;
			height: 250rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
			padding: 0 6%;
			box-sizing: border-box;

			.img-box {
				width: 80%;
				display: flex;
				align-items: center;
				image {
					border-radius: 50%;
				}
				.text {
					font-weight: 700;
					font-size: 40rpx;
					margin-left: 5%;
				}
				.text1 {
					margin-left: 20rpx;
					p {
						color: #aaa;
						margin: 5rpx 0;
					}
				}
			}

			.left {
				width: 150rpx;
				height: 150rpx;

				background-color: white;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.right {
				position: relative;
			}

			.right::before {
				position: absolute;
				content: '';
				display: inline-block;
				width: 15rpx;
				height: 15rpx;
				border-bottom: 1px solid #333;
				border-right: 1px solid #333;
				transform: rotate(-45deg);
				right: 2px
			}
		}
	}
</style>
