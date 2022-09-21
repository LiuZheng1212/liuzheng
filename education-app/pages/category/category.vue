<template>
	<view>
		<view class="cate-box">
			<scroll-view scroll-y="true" class="left" :show-scrollbar="false">
				<view>
					<view class="left-item active">
						Java
					</view>
					<view class="left-item">
						前端
					</view>
					<view class="left-item">
						前端
					</view>
					<view class="left-item">
						前端
					</view>
					<view class="left-item">
						前端
					</view>
					<view class="left-item">
						前端
					</view>
					<view class="left-item">
						前端
					</view>
					<view class="left-item">
						前端
					</view>
					<view class="left-item">
						前端
					</view>
					<view class="left-item">
						前端
					</view>
					<view class="left-item">
						前端
					</view>
				</view>
			</scroll-view>


			<view class="right">
				<view class="right-box">
					<view class="right-item">
						noasfo
					</view>
					<view class="right-item">
						noasfo
					</view>
					<view class="right-item">
						noasfo
					</view>
					<view class="right-item">
						noasfo
					</view>
				</view>
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
	.active {
		color: #345dc2 !important;
	}

	.active::before {
		content: "";
		position: absolute;
		width: 6rpx;
		height: 50rpx;
		background-color: #345dc2;
		left: 0;
		top: 35%;
	}

	.cate-box {
		width: 100%;
		display: flex;

		.left {
			width: 26%;
			text-align: center;
			height: calc(100vh - 100rpx);
			background-color: #f8f9fb;

			.left-item {
				height: 140rpx;
				line-height: 140rpx;
				font-size: 30rpx;
				font-weight: 400;
				position: relative;
				color: #8c8c8c;
			}
		}

		.right {
			flex: 1;

			.right-box {
				width: 100%;
				padding: 5%;

				.right-item {
					display: inline-block;
					padding: 2px 8px;
					box-sizing: border-box;
					border-radius: 30rpx;
					border: 1px solid #bbb;
					margin: 10rpx;
					color: #33352d;
				}
			}
		}
	}
</style>
