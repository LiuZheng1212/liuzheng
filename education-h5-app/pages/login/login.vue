<template>
	<!-- 关闭按钮 -->
	<view class="close iconfont icon-close" @click="back" />

	<!-- 登录表单 -->
	<div class="login-box">
		<!-- 登录水印 -->
		<div class="login-text">
			LOGIN
		</div>

		<!-- 欢迎回来 -->
		<div class="welcome">
			欢迎回来!
		</div>

		<div class="login-form">
			<uni-view class="input-item">
				<uni-text class="tit"><span>手机号码</span></uni-text>
				<uni-view>
					<uni-input>
						<div class="uni-input-wrapper">
							<div class="uni-input-placeholder input-placeholder" style="color: rgb(144, 147, 153);">
							</div><input maxlength="11" autocomplete="off" type="number" placeholder="请输入手机号码"
								class="uni-input-input">
						</div>
					</uni-input>
				</uni-view>
			</uni-view>

			<uni-view class="input-item">
				<uni-text class="tit"><span>验证码</span></uni-text>
				<uni-view style="display: flex;align-items: center;justify-content: space-between;">
					<uni-input>
						<div class="uni-input-wrapper">
							<div class="uni-input-placeholder input-placeholder" style="color: rgb(144, 147, 153);">
							</div>
							<input maxlength="11" autocomplete="off" type="number" placeholder="请输入手机验证码"
								class="uni-input-input">
						</div>

					</uni-input>
					<view class="codeBtn">
						获取验证码
					</view>
				</uni-view>
			</uni-view>
		</div>

		<div class="login-btn">
			登录
		</div>

	</div>

	<div class="agreement">
		<text :class="{'iconfont':true,'icon-roundcheckfill':true,'active':iconFlag}" @click="toggleIcon"></text>
		<text style="color:#999;">请认真阅读并同意</text>
		<text style="color:#40a2ff;">《用户服务协议》</text>
		<text style="color:#40a2ff;">《隐私权政策》</text>
	</div>
</template>

<script setup>
	import {
		reactive,
		toRefs
	} from 'vue'

	const data = reactive({
		iconFlag: false
	})

	const toggleIcon = () => {
		data.iconFlag = !data.iconFlag
	}
	
	const back = () => {
		uni.navigateBack()
	}

	const {
		iconFlag
	} = toRefs(data)
</script>

<style lang="scss">
	.active {
		color: #345dc2 !important;
	}

	.agreement {
		position: absolute;
		width: 100%;
		bottom: 20px;
		font-size: 12px;
		display: flex;
		padding: 10px 30px;
		box-sizing: border-box;
		justify-content: space-between;

		.icon-roundcheckfill {
			color: #999;
		}
	}

	.login-box {
		padding-top: 100px;

		.login-btn {
			border-radius: 5px;
			height: 46px;
			color: white;
			line-height: 46px;
			text-align: center;
			background-color: #345dc2;
			margin: 0 30px;
		}

		.login-btn:active {
			transform: scale(0.98);
			box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
			background-color: #007aff;
		}


		.input-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 15px;
			background: #f8f6fc;
			height: 60px;
			border-radius: 4px;
			margin-bottom: 25px;

			.codeBtn {
				background-color: #345dc2;
				border-radius: 5px;
				width: 80px;
				text-align: center;
				font-size: 12px;
				padding: 5px 0;
				color: #fff;
			}

			.uni-input-wrapper {
				display: flex;
				position: relative;
				width: 100%;
				height: 100%;

				.uni-input-input {
					display: block;
					height: 100%;
					background: none;
					opacity: 1;
				}
			}

			.tit {
				height: 25px;
				line-height: 28px;
				font-size: 13px;
				color: #606266;
				margin-bottom: 10px;
			}
		}

		.login-form {
			padding: 0 30px;
		}

		.login-text {
			font-size: 60px;
			color: #f8f8f8;
		}

		.welcome {
			position: relative;
			top: -45px;
			padding-left: 30px;
			font-size: 23px;
			color: #555;
			text-shadow: 1px 0 1px rgb(0 0 0 / 30%)
		}
	}

	.close {
		position: absolute;
		left: 10px;
		top: calc(0px + 10px);
		z-index: 90;
		padding: 10px;
		font-size: 19px;
		color: #606266;
	}
</style>
