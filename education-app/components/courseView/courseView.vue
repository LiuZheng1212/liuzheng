<template>
	<view>
		<view class="course-item" v-for="item in hotList" :key="item.id" @click="toDetail(item.id)">
			<view class="course-img">
				<image :src="item.mainImage" mode=""></image>
				<view class="course-time">
					{{ item.totalTime }}
				</view>
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
						<image src="../../static/images/money.png" mode=""></image>
						{{item.isFree==1?'免费':item.priceOriginal}}
					</view>
					<view class="right">
						<image src="../../static/images/video.png" mode=""></image> {{item.studyTotal}}人在学
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		useRouter
	} from 'vue-router'
	export default {
		name: "courseView",
		props: ['hotList'],
		setup() {
			const router = useRouter()
			const toDetail = (id) => {
				console.log(id);
				uni.navigateTo({
					url: `/pages/detailView/detailView?id=${id}`
				})
			}
			return {
				toDetail
			}
		}
	}
</script>

<style lang="scss">
	.course-item {
		width: 100%;
		padding: 2%;
		margin-bottom: 3%;
		height: 240rpx;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid #eee;

		.course-img {
			width: 40%;
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
			image {
				width: 30rpx;
				height: 30rpx;
			}

			flex: 1;
			margin-left: 4%;

			.first-text {
				font-weight: 600;
				font-size: 30rpx;
			}

			.teacther-text {
				color: #5e5e5e;
				margin-top: 12%;
				font-size: 25rpx;
			}

			.bottom {
				width: 100%;
				display: flex;
				font-size: 26rpx;

				.left {
					color: orangered;

				}

				.right {
					margin-left: 16%;
				}
			}
		}
	}
</style>
