<template>
	<view>
		<view class="header">
			<view class="left">
				<view class="left-text">
					近期上新
				</view>
				 <view class="hot-text">
					NEW
				</view>
			</view>
			<view class="right">
				全部 >
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"textView",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.header{
			margin-top: 30rpx;
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 2% 4%;
			box-sizing: border-box;
			.left{
				view{
					float: left;
				}
				.left-text{
					font-size: 40rpx;
					color: #474a49;
				}
				.hot-text{
					font-size: 24rpx;
					text-align: center;
					width: 72rpx;
					height: 36rpx;
					line-height: 36rpx;
					background-image: linear-gradient(to right,#fb6731,#fa1b11);
					color: white;
					margin:10rpx 0 0 10rpx;
					border-radius: 20rpx;
					border-bottom-left-radius: 5rpx;
					
				}
			}
			.right{
				color: #7a7a7a;
				margin-top: 10rpx;
			}
		}
</style>