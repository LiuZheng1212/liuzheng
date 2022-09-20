<template>
	<view class="course-item">
		<view class="course-img">
			<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftu1.whhost.net%2Fuploads%2F20181202%2F23%2F1543765141-AJnawTFNGK.jpg&refer=http%3A%2F%2Ftu1.whhost.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666168901&t=426976938b66882fcdd7b20e6b8ea0ce" mode=""></image>
		</view>
		<view class="first-text">
			的少女哦i扼守ii少女哦神奈川是南非v篇
		</view>
		<view class="teacther-text">
			<image src="../../static/images/mine.png" mode=""></image>  赵敏
		</view>
		<view class="bottom">
			<view class="left">
				<image src="../../static/images/money.png" mode=""></image> 396.88
			</view>
			<view class="right">
				<image src="../../static/images/video.png" mode=""></image> 684人在学
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"newCourse",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.course-item{
		width: 120vh;
		padding: 20rpx;
		height: 310rpx;
		margin-right: 20rpx;
		background-color: #fff;
		box-shadow: 5px 6px 5px #eee;
		border-radius: 30rpx;
		.course-img{
			width: 100%;
			height: 160rpx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
		}
			.first-text{
				font-weight: 600;
				font-size: 25rpx;
			}
			.teacther-text{
				color: #5e5e5e;
				margin-top: 8%;
				image {
					width: 25rpx;
					height: 25rpx;
				}
			}
			.bottom{
				width: 100%;
				display: flex;
				font-size: 25rpx;
				justify-content: space-between;
				image {
					width: 25rpx;
					height: 25rpx;
				}
			}
		
	}
</style>