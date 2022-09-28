<template>
	<view>
		<view class="top-pic">
			<span @click="back"></span>
			<image :src="detailList.mainImage" mode=""></image>
		</view>
		<view class="header" v-if="flag">
			<span class="back" @click="back"></span>
			<text class="title">{{ detailList.title }}</text>
		</view>
		<view class="content-text">
			<view class="fir-text">
				<view class="left">
					￥{{ detailList.priceDiscount }}
				</view>
				<view class="center">
					<s>￥{{ detailList.priceOriginal }}</s>
				</view>
				<view class="last">
					优惠价
				</view>
			</view>
			<view class="center-text">
				{{ detailList.title }}
			</view>
			<view class="last-text">
				<view class="left">
					{{ detailList.goodRate }}好评
				</view>
				<view class="right">
					{{ detailList.studyTotal }}人在学
				</view>
			</view>
		</view>

		<!-- tab导航栏 -->
		<view class="tab-box">
			<view :class="{'tab-item':true,active:currentId==item.id}" v-for="item in tabList" :key="item.id"
				@click="changeTab(item.id)">
				{{item.title}}
			</view>
		</view>
		<view class="tab-content">
			<view class="fir-tab" v-show="currentId==0">
				<image :src="detailList.detailUrls"></image>
			</view>
			<view class="sec-tab" v-show="currentId==1">
				<view class="sec-tab-content" v-for="item,index in sectionList" :key="item.id">
					<h4>{{ item.name }}</h4>
					<ul>
						<li v-for="child,i in item.sectionList" :key="child.id" @click="openVideo(child)">
							<view class="left">
								<image src="../../static/images/gt.png" mode=""></image>
								<text>{{ index + 1 }}-{{ i + 1 }}</text>
								<text>{{ child.name }}</text>
							</view>
							<text class="right" v-if="child.isFree">试看</text>
						</li>
					</ul>
				</view>
				<uni-popup ref="popupCoupon" type="center">
					<h3 style="color: #fff;text-align: center; margin: 20rpx;" @click="closePopup">免费试看 ×</h3>
					<video :src="videoItem" :show-center-play-btn="false" :autoplay="true"></video>
				</uni-popup>
			</view>
			<view class="thr-tab" v-show="currentId==2">
				<view class="thr-tab-item" v-for="item in commentList" :key="item.id">
					<view class="top">
						<view class="left">
							<image :src="item.userImage" mode=""></image>
							<view>
								<h4>{{ item.nickName }}</h4>
								<p>{{ item.createDate }}</p>
							</view>
						</view>
						<image class="flower" v-if="!item.isGood" src="../../static/images/grayflower.png" mode="">
						</image>
						<image class="flower" v-else src="../../static/images/flower.png" mode=""></image>
					</view>
					<view class="content">
						{{ item.content }}
					</view>
					<view class="childContent" v-if="item.children != null">讲师回复：{{ item.children.content }}</view>
				</view>
			</view>
			<view class="last-tab" v-show="currentId==3">
				<view class="content" v-for="item in setmealList" :key="item.id">
					<p>{{ item.title }}</p>
					<couresView :couresList="item.list"></couresView>
					<view class="purchase">
						<h3>￥{{ item.groupPrice }} <s>￥{{ item.totalPrice }}</s> </h3>
						<p @click="toConfirm(item)">购买套餐</p>
					</view>
				</view>
				
			</view>
		</view>

		<!-- 购买 -->
		<div class="bottom-box">
			<button class="buy-btn">立即购买</button>
		</div>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs,
		ref,
		onMounted
	} from "vue"
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		detail,
		sections,
		comment,
		setmeal
	} from '../../api/detail.js'
	import {
		onPageScroll
	} from '@dcloudio/uni-app'
	export default {
		setup() {
			const route = useRoute()
			const router = useRouter()
			uni.pageScrollTo({
				scrollTop: 0
			})
			// console.log(route.query.id);
			const back = () => {
				uni.navigateBack({})
			}
			const data = reactive({
				detailList: {}, // 详情数据
				// tab栏数据
				tabList: [{
					title: '详情',
					id: 0
				}, {
					title: '章节',
					id: 1
				}, {
					title: '评论',
					id: 2
				}, {
					title: '套餐',
					id: 3
				}],
				currentId: 0,
				flag: false, // 标题状态
				sectionList: [], // 章节数据
				videoItem: '', // 播放
				commentList: [], // 评论数据
				setmealList: [] // 套餐数据
			})
			// 切换导航栏
			const changeTab = (id) => {
				data.currentId = id
			}
			const popupCoupon = ref(null)

			// 详情
			detail().then(res => {
				data.detailList = res.data
			})
			// 章节
			sections().then(res => {
				data.sectionList = res.data
			})
			// 评论
			comment().then(res => {
				data.commentList = res.data
			})
			// 套餐
			setmeal().then(res => {
				data.setmealList = res.data
			})
			// 监听滚动条
			onPageScroll((e) => {
				if (e.scrollTop >= 200) {
					data.flag = true
				} else {
					data.flag = false
				}
			})
			// 是否看视频
			const openVideo = (child) => {
				if (child.isFree) {
					popupCoupon.value.open()
					data.videoItem = child.videoUrl
				} else {
					uni.showToast({
						title: '请先购买',
						icon: "none"
					})
				}
			}
			// 关闭弹框
			const closePopup = () => {
				popupCoupon.value.close()
			}
			
			const toConfirm = (item) => {
				router.push(`/pages/order/confirm?list=${JSON.stringify(item)}`)
			}
			
			return {
				...toRefs(data),
				changeTab,
				back,
				openVideo,
				popupCoupon,
				closePopup,
				toConfirm
			}
		}
	}
</script>

<style lang="scss">
	.header {
		height: 100rpx;
		line-height: 100rpx;
		background-color: #345dc2;
		color: #fff;
		font-weight: 600;
		font-size: 35rpx;
		position: fixed;
		top: 0;
		width: 100%;
		text-align: center;
		z-index: 1;

		.back::before {
			position: absolute;
			top: 38rpx;
			left: 30rpx;
			display: inline-block;
			content: '';
			width: 20rpx;
			height: 20rpx;
			border-left: 2px solid #fff;
			border-bottom: 2px solid #fff;
			transform: rotate(45deg);
		}

		.title {
			display: inline-block;
			width: 70%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}

	// 购买
	.bottom-box {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1;

		.buy-btn {
			border: none;
			height: 80rpx;
			line-height: 80rpx;
			width: 94%;
			background-color: #345dc2;
			color: #fff;
			border-radius: 50rpx;
		}
	}

	// 导航栏内容
	.tab-content {
		width: 100%;

		.fir-tab,
		.sec-tab,
		.thr-tab,
		.last-tab {
			width: 100%;
			padding-bottom: 60rpx;
			image {
				width: 100%;
				display: block;
			}
		}
		.last-tab {
			padding: 20rpx;
			// padding-bottom: 60rpx;
			.content {
				width: 96%;
				margin: 30rpx auto;
				padding: 10rpx;
				box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);
				.purchase {
					display: flex;
					justify-content: space-between;
					align-items: center;
					p{
						color: #fb403b;
						font-weight: 600;
						font-size: 30rpx;
					}
					h3 {
						color: #fb403b;
						s {
							color: #79797b;
							font-size: 30rpx;
						}
					}
				}
			}
			
		}

		.fir-tab {
			height: 100%;

			image {
				height: 22112rpx;
			}
		}

		.sec-tab {
			padding: 30rpx;

			.sec-tab-content {
				h4 {
					font-weight: 600;
					color: #333333;
					font-size: 35rpx;
				}

				ul {
					list-style: none;
					margin: 0;
					padding: 0;

					li {
						display: flex;
						justify-content: space-between;
						height: 100rpx;
						align-items: center;
						border-bottom: 1px solid #eee;

						.left {
							display: flex;
							align-items: center;

							image {
								width: 40rpx;
								height: 40rpx;
							}

							text {
								font-size: 30rpx;
								color: #79797b;
								margin-left: 10rpx;
								font-weight: 540;
							}
						}

						.right {
							color: #007aff;
							font-size: 30rpx;
						}
					}
				}
			}
		}

		.thr-tab {
			padding: 20rpx;

			.thr-tab-item {
				width: 100%;
				padding: 20rpx;
				box-sizing: border-box;
				border-bottom: 1px solid #eee;

				.content {
					font-size: 30rpx;
					margin-top: 20rpx;
					color: #79797b;
				}
				.childContent {
					background-color: #f8f9fb;
					color: #79797b;
					padding: 10rpx;
					margin: 10rpx 0;
					font-size: 30rpx;
				}
				.top {
					width: 100%;
					display: flex;
					justify-content: space-between;

					.flower {
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;

					}

					.left {
						width: 60%;
						display: flex;
						align-items: center;

						image:nth-child(1) {
							width: 80rpx;
							height: 80rpx;
							border-radius: 50%;
						}

						view {
							margin-left: 20rpx;

							h3 {
								font-size: 30rpx;
							}

							p {
								font-size: 25rpx;
								color: #79797b;
							}
						}
					}

				}
			}
		}
	}

	// 导航栏
	.tab-box {
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #eee;

		.tab-item {
			height: 60rpx;
			line-height: 60rpx;
		}

		.active {
			border-bottom: 4rpx solid #007aff;
			color: #007aff;
		}
	}

	// 文字部分
	.content-text {
		width: 100%;
		padding: 3%;
		border-bottom: 30rpx solid #f8f9fb;

		.fir-text {
			width: 100%;
			display: flex;
			align-items: center;

			.left {
				color: red;
				font-weight: 600;
				font-size: 45rpx;
			}

			.center {
				color: #999999;
				margin: 0 2%;
			}

			.last {
				width: 80rpx;
				height: 30rpx;
				border: 1px solid red;
				color: red;
				text-align: center;
				border-radius: 10rpx;
				line-height: 30rpx;
				font-size: 20rpx;
			}
		}

		.center-text {
			font-weight: 600;
			font-size: 36rpx;
		}

		.last-text {
			width: 100%;
			display: flex;
			margin: 2% 0;
			color: #8d8d8d;

			.left,
			.right {
				width: 200rpx;
				height: 70rpx;
				text-align: center;
				line-height: 70rpx;
				border-radius: 40rpx;
				background-color: #f8f9fb;
			}

			.left {
				margin-right: 3%;
			}
		}
	}

	.top-pic {
		width: 100%;
		position: relative;

		span {
			position: absolute;
			width: 64rpx;
			height: 64rpx;
			background-color: rgba(0, 0, 0, 0.5);
			top: 2%;
			left: 2%;
			border-radius: 50%;
			z-index: 1;
		}

		span::before {
			content: "";
			width: 23rpx;
			height: 23rpx;
			border-left: 4rpx solid #fff;
			border-bottom: 4rpx solid #fff;
			position: absolute;
			top: 25%;
			left: 40%;
			transform: rotate(45deg);
		}

		image {
			width: 100%;
		}
	}
</style>
