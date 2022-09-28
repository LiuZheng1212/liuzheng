<template>
	<view>
		<view class="text" v-if="titles">
			<view class="left">
				<view class="left-text">
					{{ titles }}
				</view>
				<view class="hot-text">
					HOT
				</view>
			</view>
			<view class="right">
				全部 >
			</view>
		</view>
		<view class="course">
			<view class="course-item" v-for="item in couresList" :key="item.id" @click="toDetail(item.id)">
				<view class="course-img">
					<image :src="item.mainImage" mode=""></image>
					<view class="course-time">
						{{ item.totalTime }}
					</view>
				</view>
				<view class="course-text">	
					<view class="first-text">
						{{ item.title }}
					</view>
					<view class="teacther-text">
						<image src="../../static/images/mine.png" mode=""></image> {{ item.nickName }}
					</view>
					<view class="bottom">
						<view class="left">
							<image src="../../static/images/money.png" mode=""></image> {{ item.priceDiscount }}
						</view>
						<view class="right">
							<image src="../../static/images/video.png" mode=""></image> {{ item.studyTotal }}人在学
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "courseView",
		props: ['couresList', 'titles'],
		setup() {
			// 跳转详情页
			const toDetail = (id) => {
				uni.navigateTo({
					url:`/pages/detailView/detailView?id=${id}`
				})
			}
			
			return {
				toDetail
			}
		}
	}
</script>

<style lang="scss">
	.text {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2% 4%;
		box-sizing: border-box;
	
		.left {
			view {
				float: left;
			}
	
			.left-text {
				font-size: 35rpx;
				color: #474a49;
			}
	
			.hot-text {
				font-size: 24rpx;
				padding: 0 5px;
				background-image: linear-gradient(to right, #fb6731, #fa1b11);
				color: white;
				border-radius: 15px 15px 15px 0;
				margin: 10rpx;
			}
		}
	
		.right {
			color: #7a7a7a;
			font-size: 30rpx;
		}
	}
	.course {
		padding: 0 25rpx;
	}
	.course-item {
		width: 100%;
		padding: 10rpx;
		margin-bottom: 3%;
		height: 200rpx;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid #eee;

		.course-img {
			width: 43%;
			position: relative;

			image {
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}

			.course-time {
				position: absolute;
				bottom: 2px;
				right: 2px;
				font-size: 11px;
				color: #fff;
				background: rgba(51, 51, 51, .4);
				border-radius: 10px;
				padding: 0 4px;

			}
		}

		.course-text {
			font-size: 30rpx;
			image {
				width: 25rpx;
				height: 25rpx;
			}

			flex: 1;
			margin-left: 4%;

			.first-text {
				font-weight: 600;
			}

			.teacther-text {
				color: #5e5e5e;
				margin-top: 18rpx;
				font-size: 28rpx;
			}

			.bottom {
				margin-top: 5rpx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				.left {
					color: orangered;
					font-size: 25rpx;
				}

				.right {
					margin-left: 16%;
					font-size: 25rpx;
				}
			}
		}
	}
</style>
