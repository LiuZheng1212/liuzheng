<template>
	<view class="article-cnt">
		<div class="cnt-item" v-for="item in articleList" :key="item.id">
			<div class="top">
				<div class="left">
					<div class="title">{{item.title}}</div>
					<view class="summary text-ellipsis">{{item.summary}}</view>
				</div>
				<div class="right" v-if="item.imageUrl != null">
					<img :src="item.imageUrl" alt="">
				</div>
			</div>
			<div class="author">
				<view class="name" style="color: #s333;">{{item.nickName}}</view>
				<view class="timer" style="margin-left: 10px;">
					{{timer(+new Date(item.updateDate))}} · {{item.thumhup}}赞
				</view>
			</div>
		</div>

		<!-- 底部消息提示 -->
		<view class="foot" v-show="flag == 1">
			-- 已经拉到最下面了惹 --
		</view>
	</view>
</template>

<script>
	import {
		timer
	} from '../../utils/time.js'
	export default {
		props: ['articleList', 'flag'],
		setup() {

			return {
				timer
			}
		}
	}
</script>

<style lang="scss">
	.article-cnt {
		width: 100%;
		margin-top: 40px;
		padding-bottom: 140rpx;

		.foot {
			width: 100%;
			text-align: center;
			margin-top: 20rpx;
		}

		.cnt-item {
			width: 100%;
			padding: 15px;
			box-sizing: border-box;
			border-bottom: 0.5px solid #eee;

			.author {
				font-size: 13px;
				color: #999;
				display: flex;
			}

			.top {
				display: flex;

				.left {
					flex: 1;
					display: flex;
					flex-direction: column;

					.title {
						font-size: 17px;
						font-weight: 700;
					}

					.summary {
						font-size: 13px;
						color: #999;
						-webkit-line-clamp: 1;
					}
				}

				.right {
					width: 220rpx;

					img {
						width: 100%;
						border-radius: 5px;
						height: 140rpx;
					}
				}

			}
		}
	}
</style>
