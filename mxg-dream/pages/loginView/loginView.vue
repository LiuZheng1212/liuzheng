<template>
	<view>
		<div class="header">
			X
		</div>
		<view class="fir-box">
			欢迎回来！
		</view>
		<view class="tel-box">
			<view class="">
				手机号码
			</view>
			<input type="text" placeholder="请输入手机号码">
		</view>
		<view class="code-box">
			<view class="">
				验证码
			</view>
			<view class="right">
				<input type="text" placeholder="请输入手机验证码">
				<view class="code">
					获取验证码
				</view>
			</view>
		</view>
		<view class="login-btn">
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
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.bottom{
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
		.icon{
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
	a{
		font-style: normal;
		text-decoration: none;
		color: #4ca2e8;
	}
	.header{
		width: 100%;
		height: 150rpx;
		padding: 5%;
		box-sizing: border-box;
	}
	.login-btn{
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
	.tel-box,.code-box{
		width: 86%;
		margin-left: 7%;
		margin-bottom: 7%;
		padding: 2% 4%;
		box-sizing: border-box;
		height: 120rpx;
		background-color: #f8f6fc;
	}
	input{
		margin: 2% 0;
	}
	.code-box{
		.right{
			width: 100%;
			display: flex;
			justify-content: space-between;
			.code{
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
.fir-box{
	width: 100%;
	height: 160rpx;
	line-height: 160rpx;
	font-size: 50rpx;
	padding: 0 10%;
}
</style>
