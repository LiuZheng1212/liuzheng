<template>
	<view>
		<div class="header" @click="$router.go(-1)">
			X
		</div>
		<view class="fir-box">
			欢迎回来！
		</view>
		<view class="tel-box">
			<view class="">
				手机号码
			</view>
			<input type="number" v-model="mobile" maxlength="11" placeholder="请输入手机号码">
		</view>
		<view class="code-box">
			<view class="">
				验证码
			</view>
			<view class="right">
				<input type="text" v-model="code" placeholder="请输入手机验证码">
				<view class="code" @click="codeItem">
					{{times != '获取验证码' ? times + 's' : times}}
				</view>
			</view>
		</view>
		<view class="login-btn" @click="loginOk">
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
		reactive,
		toRefs
	} from 'vue'
	import {
		getCode,
		getUser
	} from '../../api/login.js'
	import { useRouter } from 'vue-router'
	export default {
		setup() {
			const router = useRouter()
			const data = reactive({
				mobile: '',
				code: '',
				times: '获取验证码',
				flag: false,
			})
			// 获取验证码
			const codeItem = () => {
				// let regMobile = /^[1][3,4,5,6,7,8],[0-9]{9}$/
				if (data.mobile == '') {
					return uni.showToast({
						icon: 'none',
						title: '手机号格式不正确'
					})
				}
				if (!data.flag) {
					data.flag = true
					data.times = 60
					getCode(data.mobile).then(res => {})
					let a = setInterval(() => {
						data.times--
						if (data.times == 0) {
							clearInterval(a)
							data.times = '获取验证码'
							data.flag = false
						}
					}, 1000)
				}
			}

			const loginOk = () => {
				if (data.mobile == '' || data.code != '123456') {
					uni.showToast({
						icon: 'none',
						title: '手机号格式不正确'
					})
				} else {
					getUser({
						mobile: data.mobile,
						code: data.code
					}).then(res => {
						console.log(res);
						localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
						localStorage.setItem('mxgEducationToken', res.data.refresh_token)
						router.push('/pages/my/my')
						uni.showToast({
							icon: 'success',
							title: '登录成功'
						})
					})
				}
			}


			return {
				...toRefs(data),
				loginOk,
				codeItem
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
