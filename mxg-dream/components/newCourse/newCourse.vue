<template>
	<view class="course-item" v-for="item in newList" :key="item.id" @click="toDetail(item)">
		<view class="course-img">
			<image :src="item.mainImage" mode=""></image>
			<p class="imgs">{{item.totalTime}}</p>
		</view>
		<view class="first-text">
			{{item.title}}
		</view>
		<view class="teacther-text">
			<image src="../../static/images/mine.png" mode=""></image>  {{item.nickName}}
		</view>
		<view class="bottom">
			<view class="left">
				<image src="../../static/images/money.png" mode=""></image> 
				{{item.isFree==1?item.priceOriginal:'免费'}}
			</view>
			<view class="right">
				<image src="../../static/images/video.png" mode=""></image> {{item.studyTotal}}人在学
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"newCourse",
		props:['newList'],
		setup() {
			const toDetail=(item)=>{
				console.log(item);
				uni.navigateTo({
					url:`/pages/detailsView/detailsView?id=${item.id}`
				})
			}
			return {
				toDetail
			}
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
		position: relative;
		.course-img{
			width: 100%;
			height: 160rpx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
			.imgs{
				box-sizing: border-box;
				padding: 2rpx 15rpx;
				border-radius: 50px;
				position: absolute;
				bottom: 180rpx;
				right: 30rpx;
				color: #fff;
				background-color: rgba(0, 0, 0, 0.3);
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
				position: relative;
				bottom: 0;
				image {
					width: 25rpx;
					height: 25rpx;
				}
			}
		
	}
</style>