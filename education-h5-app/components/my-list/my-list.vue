<template>
	<view class="hot-list">
		<view class="hot-title">
			<view style="font-size: 19px;font-weight: 500;color: #303133;display: flex;align-items: center;">
				{{title ? title : '热门推荐'}}
				<uni-text data-v-5ce5cfbe="" class="word"><span>{{word ? word : 'HOT'}}</span></uni-text>
			</view>
			<view style="font-weight: 400;color: #959da5;font-size: 14px;">全部 > </view>
		</view>
		<!-- 下拉菜单 -->
		<template v-if="!scroll">
			<view class="hot-item" v-for="item in data" :key="item.id">
				<view class="hot-item-left">
					<img :src="item.mainImage" alt="">
					<!-- 视频时长 -->
					<view class="videoTime">
						{{item.totalTime}}
					</view>
				</view>
				<view class="hot-item-right">
					<view style="font-size: 14px;font-weight: 700;">{{item.title}}</view>
					<text style="font-size: 11px;color: #999;" class="iconfont icon-laoshi2">{{item.nickName}}</text>
					<view class="info">
						<text style="color: #fb6932;width: 65px;font-size: 14px;"
							class="iconfont icon-moneybag">{{item.isFree == 1 ? '免费' : item.priceDiscount}}</text>
						<text style="font-size: 11px;color: #222;margin-left: 10px;"
							class="iconfont icon-video">{{item.commTotal}}
							人在学</text>
					</view>
				</view>
			</view>
		</template>

		<!-- 侧边栏滑动 -->
		<template v-else>
			<scroll-view scroll-x="true" class="hot-item-scroll" :show-scrollbar="false">
				<view class="hot-items" v-for="item in data" :key="item.id" scroll-x>
					<view class="hot-item-top">
						<img :src="item.mainImage" alt="">
						<!-- 视频时长 -->
						<view class="videoTime">
							{{item.totalTime}}
						</view>
					</view>
					<view class="hot-item-bottom">
						<view class="title">{{item.title}}</view>
						<text style="font-size: 11px;color: #999;"
							class="iconfont icon-laoshi2">{{item.nickName}}</text>
						<view class="info">
							<text style="color: #fb6932;width: 65px;font-size: 14px;"
								class="iconfont icon-moneybag">{{item.isFree == 0 ? '免费' : item.priceDiscount}}</text>
							<text style="font-size: 11px;color: #222;" class="iconfont icon-video">{{item.commTotal}}
								人在学</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</template>
		<!-- 暂无消息提示 -->
		<view class="foot" v-show="flag == 1">
			-- 已经拉到最下面了惹 --
		</view>
	</view>
</template>

<script>
	export default {
		props: ['data', 'scroll', 'title', 'word', 'flag'],
		setup() {

			return {

			}
		},
	}
</script>

<style lang='scss'>
	.hot-list {
		width: 100%;
		padding: 0 15px;
		margin-top: 30px;

		.foot {
			width: 100%;
			text-align: center;
			margin-top: 20rpx;
		}

		.hot-title {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.word {
				font-size: 10px;
				background-image: -webkit-linear-gradient(left, #fb6932, #fa140e);
				background-image: linear-gradient(90deg, #fb6932, #fa140e);
				color: #fff;
				padding: 0 5px;
				border-radius: 15px 15px 15px 0;
				margin-left: 5px;
			}
		}

		.hot-item-scroll {
			width: 100%;
			white-space: nowrap;

			.hot-items {
				width: 315rpx;
				display: inline-block;
				margin-top: 10px;
				padding: 5px;
				margin-right: 8px;
				border-radius: 10px;
				box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);

				.hot-item-top {
					width: 100%;
					position: relative;

					img {
						width: 100%;
						border-radius: 10px;
						height: 200rpx;
					}

					.videoTime {
						position: absolute;
						bottom: 6px;
						right: 3px;
						font-size: 11px;
						color: #fff;
						background: rgba(51, 51, 51, .4);
						border-radius: 10px;
						padding: 0 4px;
					}
				}

				.hot-item-bottom {
					width: 100%;

					.title {
						width: 100%;
						height: 35px;
						line-height: 17px;
						font-size: 14px;
						font-weight: 700;
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-line-clamp: 2;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						white-space: normal;
					}

					.info {
						width: 100%;
						display: flex;
						justify-content: space-between;
					}
				}
			}
		}

		.hot-item {
			width: 100%;
			display: flex;
			margin: 10px 0;
			border-bottom: 1px solid #f1f1f1;
			padding-bottom: 5px;

			.hot-item-left {
				width: 290rpx;
				position: relative;

				.videoTime {
					position: absolute;
					bottom: 6px;
					right: 3px;
					font-size: 11px;
					color: #fff;
					background: rgba(51, 51, 51, .4);
					border-radius: 10px;
					padding: 0 4px;
				}

				img {
					width: 100%;
					height: 80px;
					border-radius: 5px;
				}
			}

			.hot-item-right {
				flex: 1;
				margin-left: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-bottom: 5px;
			}
		}
	}

	.hot-item:nth-last-child(1) {
		border-bottom: none;
	}
</style>
