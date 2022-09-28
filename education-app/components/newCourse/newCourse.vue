<template>
	<view class="pay-content" v-for="item in latestList" :key="item.id" @click="toDetail(item.id)">
		<div class="img-box">
			<image :src="item.mainImage" mode=""></image>
			<view class="course-time">
				{{ item.totalTime }}
			</view>
		</div>
		<div class="text">
			<h5>{{ item.title }}</h5>
			<p style="margin-top: 10rpx;">
				<span class="head">
					<image src="../../static/images/mine.png" mode=""></image>
				</span>
				<span class="name">{{ item.nickName }}</span>
			</p>
			<p><span class="price">
					<image src="../../static/images/money.png" mode=""></image> {{ item.priceDiscount }}
				</span><span>
					<image src="../../static/images/video.png" mode=""></image> {{ item.studyTotal }}
				</span></p>
		</div>
	</view>
</template>

<script>
	export default {
		name: "newCourse",
		props: ['latestList'],
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
	// display: flex;
	.pay-content {
		display: inline-block;
		width: 150px;
		padding: 0 5px;
		margin-right: 10px;
		border-radius: 10px;
		box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);
		background-color: #fff;

		.img-box {
			width: 350rpx;
			position: relative;

			image {
				width: 140px;
				height: 85px;
				border-radius: 20rpx;
			}

			.course-time {
				position: absolute;
				bottom: 7px;
				right: 35px;
				font-size: 11px;
				color: #fff;
				background: rgba(51, 51, 51, .4);
				border-radius: 10px;
				padding: 0 4px;
			}
		}

		.text {
			h4 {
				font-family: 600;
			}
			p {
				font-size: 25rpx;
				image {
					width: 30rpx;
					height: 30rpx;
					padding: 7rpx 5rpx 0 0;
				}

				.name,
				.head {
					color: #aaa;
				}

				.price {
					font-size: 20rpx;
					color: #ff8c65;
					margin-right: 50rpx;
				}
			}
		}
	}
</style>
