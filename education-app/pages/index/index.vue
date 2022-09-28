<template>
	<view class="content">
		<view class="header" :style="`background-color: ${Background};`">
			<searchCom></searchCom>
		</view>
		<!-- 轮播图 -->
		<view class="banner">
			<banner :banners="banners" @swiperItem="swiperItem"></banner>
		</view>
		<!-- 分类搜索 -->
		<view class="cate-box">
			<view v-for="item in navList" :key="item.id" @click="toContent(item.name, item.id)">{{ item.name }}</view>
			<view @click="toContent('全部分类', 9)">全部分类</view>
		</view>
		<view class="list-container">
			<!-- 热门推荐 -->
			<couresView :couresList="hotList" titles="热门推荐"></couresView>

			<!-- 近期上新 -->
			<view class="text">
				<view class="left">
					<view class="left-text">
						近期上新
					</view>
					<view class="hot-text">
						HOT
					</view>
				</view>
				<view class="right">
					全部 >
				</view>
			</view>
			<!-- 近期上新 -->
			<scroll-view scroll-x="true" :show-scrollbar="false">
				<view class="content-box">
					<newCourse :latestList="latestList"></newCourse>
				</view>
			</scroll-view>

			<!-- 免费精选 -->
			<couresView :couresList="chargeList" titles="免费精选"></couresView>

			<!-- 付费精选 -->
			<couresView :couresList="chargesList" titles="付费精选"></couresView>
		</view>
		<image @click="scrolTop" class="scrollTop" v-show="flag" src="../../static/images/scrollTop.png" mode="">
		</image>
	</view>
</template>

<script>
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	import {
		getBanner,
		list,
		hot,
		latest,
		charge,
		charges
	} from '@/api/index.js'
	import {
		onPageScroll,
		onPullDownRefresh,
		onReachBottom
	} from '@dcloudio/uni-app'
	import { useRouter } from 'vue-router'
	export default {
		setup() {
			
			const router = useRouter()
			
			const data = reactive({
				Background: '#006C00', // 搜索框背景色
				scrollTop: '', // 滚动条高度
				flag: false, // 回到顶部的状态
				navList: [], // 轮播图
				banners: [], // 分类列表
				hotList: [], // 热门列表
				latestList: [], // 近期上新
				chargeList: [], // 免费精选
				chargesList: [], // 付费精选
				pageSize: 10, // 付费精选条数
				page: 1 // 付费精选页数
			})
			// 轮播图背景色
			const swiperItem = (bgc) => {
				if (data.scrollTop >= 200) {
					data.Background = '#0072b7'
				} else {
					data.Background = bgc
				}
			}
			
			// 轮播图
			getBanner().then(res => {
				data.banners = res.data

			})

			// 分类列表
			list().then(res => {
				data.navList = res.data.splice(0, 7)
			})

			// 热门列表
			hot().then(res => {
				data.hotList = res.data.records
			})

			// 近期上新
			latest().then(res => {
				data.latestList = res.data.records
			})

			// 免费精选
			charge().then(res => {
				data.chargeList = res.data.records
			})

			// 付费精选
			charges().then(res => {
				data.chargesList = res.data.records
			})
			
			// 监听滚动条
			onPageScroll((e) => {
				data.scrollTop = e.scrollTop
				swiperItem()
				if (e.scrollTop >= 1400) {
					data.flag = true
				} else {
					data.flag = false
				}
			})
			
			// 点击回到顶部
			const scrolTop = () => {
				uni.pageScrollTo({
					scrollTop: 0
				})
			}

			// 上拉刷新
			onPullDownRefresh(() => {
				data.page = 1
				charges(data.page, data.pageSize).then(res => {
					data.chargesList = res.data.records
				})
				// 停止下拉
				uni.stopPullDownRefresh()
			})
			
			// 触底加载
			onReachBottom(() => {
				data.page++
				charges(data.page, data.pageSize).then(res => {
					data.chargesList = [...res.data.records, ...data.chargesList]
				})
			})
			
			const toContent = (name, id) => {
				router.push(`/pages/content/content?name=${name}&id=${id}`)
			}
			
			return {
				...toRefs(data),
				swiperItem,
				scrolTop,
				toContent
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	// 分类区域
	.list-container {
		.content-box {
			padding: 25rpx;
			box-sizing: border-box;
			display: flex;
		}

		scroll-view ::-webkit-scrollbar {
			display: none;
			width: 0;
			height: 0;
			color: transparent;
		}
	}

	.cate-box {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		align-items: center;
		box-sizing: border-box;

		view {
			width: 23%;
			margin: 1%;
			height: 70rpx;
			line-height: 70rpx;
			border-radius: 12rpx;
			text-align: center;
			font-size: 26rpx;
			background-color: #f8f9fb;
		}
	}


	.content {
		position: relative;

		.scrollTop {
			position: fixed;
			bottom: 15%;
			width: 50px;
			height: 50px;
			right: 30rpx;
		}
	}

	.header {
		width: 100%;
		padding: 15rpx;
		background-color: #0072b7;
		position: sticky;
		top: 0;
		z-index: 1;
	}
</style>
