<template>
	<view>
		<div class="header" @click="$router.push('/pages/mineView/mineView')">
			X
		</div>
		<view class="fir-box">
			欢迎回来！
		</view>
		<view class="tel-box">
			<view class="">
				手机号码
			</view>
			<input type="text" v-model="mobile" placeholder="请输入手机号码">
		</view>
		<view class="code-box">
			<view class="">
				验证码
			</view>
			<view class="right">
				<input type="text" v-model="code" placeholder="请输入手机验证码">
				<view class="code" @click="yzm">
					<p v-if="a==0">获取验证码</p>
					<p v-else>{{a}}</p>
				</view>
			</view>
		</view>
		<view class="login-btn" @click="login">
			登录
		</view>

		<view class="bottom">
			<view class="icon">
				v
			</view>
			<view class="text">
				请认真阅读并同意
				<a href="">《用户服务协议》</a>
				<a href="">《隐私权政策》</a>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	import {
		logins
	} from '@/api/http/http.js'
	import {useRoute,useRouter} from 'vue-router'
	export default {
		setup() {
			const router = useRouter()
			const data = reactive({
				mobile: '',
				code: '',
				a: 0,
				arrs: {}
			})
			const yzm = () => {
				console.log(1);
				data.a = 6
				let date = setInterval(() => {
					data.a--
					if (data.a == 0) {
						clearInterval(date)
					}
				}, 1000)
			}
			// 登录
			const login = () => {
				if (data.mobile == '') {
					uni.showToast({
						icon: 'none',
						title: '不能为空'
					})
				} else if (data.code != '123456') {
					uni.showToast({
						title: '验证码不正确',
						icon: 'none'
					})
				} else {
					logins().then(res => {
						console.log(res);
						if (res.code == 20000) {
							sessionStorage.setItem('token', res.data.access_token)
							// data.arrs=res.data
							sessionStorage.setItem('data', JSON.stringify(res.data.userInfo))
							uni.showToast({
								title: res.message
							})
							router.push('/pages/mineView/mineView')
							// uni.switchTab({
							// 	url:'/pages/mineView/mineView'
							// })
						} else {
							uni.showToast({
								title: res.message
							})
						}
					})
				}

			}
			return {
				...toRefs(data),
				yzm,
				login

			}
		}
	}
</script>

<style lang="scss">
	.bottom {
		width: 90%;
		margin-left: 5%;
		font-size: 25rpx;
		display: flex;
		align-items: center;
		position: absolute;
		bottom: 3%;
		padding: 0 2%;
		box-sizing: border-box;
		left: 0;

		.icon {
			width: 40rpx;
			height: 40rpx;
			text-align: center;
			line-height: 40rpx;
			border-radius: 50%;
			color: white;
			background-color: #345dc2;
			margin: 0 1%;
		}
	}

	a {
		font-style: normal;
		text-decoration: none;
		color: #4ca2e8;
	}

	.header {
		width: 100%;
		height: 150rpx;
		padding: 5%;
		box-sizing: border-box;
	}

	.login-btn {
		width: 80%;
		margin-left: 10%;
		height: 90rpx;
		background-color: #345dc2;
		color: white;
		text-align: center;
		line-height: 90rpx;
		font-size: 40rpx;
		border-radius: 10rpx;
	}

	.tel-box,
	.code-box {
		width: 86%;
		margin-left: 7%;
		margin-bottom: 7%;
		padding: 2% 4%;
		box-sizing: border-box;
		height: 120rpx;
		background-color: #f8f6fc;
	}

	input {
		margin: 2% 0;
	}

	.code-box {
		.right {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.code {
				width: 32%;
				text-align: center;
				font-size: 25rpx;
				height: 56rpx;
				line-height: 56rpx;
				border-radius: 10rpx;
				color: white;
				background-color: #345dc2;
			}
		}
	}

	.fir-box {
		width: 100%;
		height: 160rpx;
		line-height: 160rpx;
		font-size: 50rpx;
		padding: 0 10%;
	}
</style>
