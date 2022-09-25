<template>
	<view>
		<view class="course-item" v-for="item in freeList" :key="item.id">
			<view class="course-img">
				<image :src="item.mainImage" mode=""></image>
				<p class="imgs">{{item.totalTime}}</p>
			</view>
			<view class="course-text">
				<view class="first-text">
					{{item.title}}
				</view>
				<view class="teacther-text">
					<image src="../../static/images/mine.png" mode=""></image> {{item.nickName}}
				</view>
				<view class="bottom">
					<view class="left">
						<image class="img1" src="../../static/images/money.png" mode=""></image> 
						{{item.isFree==1?item.priceOriginal:'免费'}}
					</view>
					<view class="right">
						<image class="img2" src="../../static/images/video.png" mode=""></image> {{item.studyTotal}}人在学
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"courseView",
		props:["freeList"],
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
	.img1{
		position: relative;
		top: 2rpx;
		left: 5rpx;
	}
	.img2{
		position: relative;
		top: 2rpx;
		left: 2rpx;
	}
.course-item{
		width: 100%;
		padding: 2%;
		margin-bottom: 3%;
		height: 240rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #eee;
		.course-img{
			position: relative;
			width: 40%;
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
				bottom: 10rpx;
				right: 10rpx;
				color: #fff;
				background-color: rgba(0, 0, 0, 0.3);
			}
		}
		.course-text{
			image {
				width: 30rpx;
				height: 30rpx;
			}
			flex: 1;
			margin-left: 4%;
			.first-text{
				font-weight: 600;
				
			}
			.teacther-text{
				color: #5e5e5e;
				margin-top: 8%;
			}
			.bottom{
				width: 100%;
				display: flex;
				margin-top: 5rpx;
				justify-content: space-between;
				.left{
					color: orangered;
					
				} 
				.right{
					// margin-left: 16%;
					margin-right: 10rpx;
					
				}
			}
		}
	}
</style>