<template>
	<view class="boxs">
		<!-- 顶部 -->
		<div class="top">
			<p class="pp" @click="$router.push('/pages/my/my')"></p>
			<h4>意见反馈</h4>
			<p></p>
		</div>
		<!-- 表单 -->
		<div class="froms">
			<form @submit="formSubmit">
				<!-- 单选框 -->
				<view class="uni-form-item uni-column" style="margin:50rpx 90rpx;">
					<radio-group name="radio" class="radio">
						<label>
							<radio value="内容意见" /><text style="margin-right: 30rpx;">内容意见</text>
						</label>
						<label>
							<radio value="产品建议" /><text style="margin-right: 30rpx;">产品建议</text>
						</label>
						<label>
							<radio value="其他" /><text style="margin-right: 30rpx;">其他</text>
						</label>
					</radio-group>
				</view>
				<!-- 文本域 -->
				<view class="uni-form-item uni-column">
					<view class="uni-textarea input">
						<textarea placeholder-style="color:#aaa" placeholder="请填写具体内容帮助我们了解您的意见和建议" name="fannum" />
					</view>
				</view>
				<!-- QQ输入框 -->
				<view class="uni-form-item uni-column input">
					<input class="uni-input" name="qqnum" placeholder="填写您的QQ" />
				</view>
				<!-- 微信输入框 -->
				<view class="uni-form-item uni-column input">
					<input class="uni-input" name="weixinnum" placeholder="填写您的微信" />
				</view>
				<!-- 提交按钮 -->
				<view class="uni-btn-v" style="margin: 0 30rpx;">
					<button form-type="submit" style="background-color: #007aff;color: #fff;">提交</button>
				</view>
			</form>
		</div>
	</view>
</template>

<script>
	export default {
		setup() {
			// 提交
			const formSubmit = (e) => {
				var formdata = e.detail.value
				if (formdata.fannum == '' || formdata.qqnum == '' || formdata.weixinnum == '' || formdata.radio ==
					'') {
					uni.showToast({
						title: '输入不能为空',
						duration: 2000,
						icon: "error"
					})
				}
			}
			return {
				formSubmit
			}
		}
	}
</script>

<style lang="scss">
	.boxs {
		width: 100%;
		height: 100vh;
		background-color: #f8f9fb;
		overflow: hidden;
	}

	.input {
		margin: 0 30rpx 30rpx 30rpx;
		border: 1px solid #eee;
		padding: 20rpx;
	}

	.uni-form-item .title {
		padding: 20rpx 0;
	}

	.froms {
		margin-top: 110rpx;;
	}

	.uni-padding-wrap {
		margin: 100rpx 0;
		display: flex;
		justify-content: center;
	}

	.top {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;

		.pp {
			margin-left: 12rpx;
			position: relative;
		}
		.pp::before {
			content: '';
			position: absolute;
			display: inline-block;
			width: 18rpx;
			height: 18rpx;
			border-left: 2rpx solid #000;
			border-bottom: 2rpx solid #000;
			transform: rotate(45deg);
			left: 15px;
			top: -7px;
		}
	}
</style>
