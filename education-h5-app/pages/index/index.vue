<template>
	<!-- 轮播图 -->
	<view class="banner-box" :style="{'background-image': `linear-gradient(${bannerBackground} 50%, #F8F9FB)`}">
		<my-banner :bannerData="bannerData" @change="change"></my-banner>
	</view>

	<!-- 分类区 -->
	<view class="category-box">
		<my-category :categoryData="categoryData.slice(0,7)"></my-category>
	</view>

	<!-- 热门推荐 -->
	<my-list :data="hotList"></my-list>

	<!-- 近期上新 -->
	<my-list :data="newList" scroll="false" title="近期上新" word="NEW"></my-list>

	<!-- 免费精选 -->
	<my-list :data="freeList" title="免费精选" word="FREE"></my-list>

	<!-- 付费精选 -->
	<my-list :data="paymentList" title="付费精选" word="NICE" :flag="showMsg"></my-list>

	<!-- 返回顶部 -->
	<back-top :showFlag="showFlag"></back-top>

	<view class="null"></view>
	
</template>
<script setup>
	import {
		reactive,
		toRefs,
	} from 'vue'
	import {
		getHotrecom,
		getbanner,
		getHotList,
		getNewList,
		getFreeList,
		getPaymentList,
	} from '../../api/api.js'
	import {
		onReachBottom,
		onPullDownRefresh,
		onPageScroll
	} from "@dcloudio/uni-app";

	const data = reactive({
		// 轮播图数据
		bannerData: [],
		// 轮播图当前页
		current: 0,
		// 背景色
		bannerBackground: '#006C00',
		// 分类区功能
		categoryData: [],
		// 热门推荐
		hotList: [],
		// 近期上新
		newList: [],
		// 当前页码
		currentPage: 1,
		// 免费精选
		freeList: [],
		// 付费精选
		paymentList: [],
		// 暂无消息提示状态
		showMsg: 0,
		// 返回顶部按钮显示隐藏
		showFlag:false
	})
	
	// 监听页面滚动事件
	onPageScroll((e) => {
		if(e.scrollTop > 300){
			data.showFlag = true
		} else {
			data.showFlag = false
		}
	})

	// 请求首页轮播图
	getbanner().then(res => {
		data.bannerData = res.data.data
	})

	// 请求首页分类
	getHotrecom().then(res => {
		data.categoryData = res.data.data
	})

	// 请求首页热门推荐
	getHotList({
		sort: "hot",
		current: 1,
		size: 10
	}).then(res => {
		data.hotList = res.data.data.records
	})

	// 请求近期上新
	getHotList({
		sort: "new",
		current: 1,
		size: 10
	}).then(res => {
		data.newList = res.data.data.records
	})

	// 请求免费精选
	getFreeList({
		isFree: 1,
		current: 1,
		size: 8
	}).then(res => {
		data.freeList = res.data.data.records
	})

	// 封装请求付费精品
	const getPaymentLists = () => {
		// 请求付费精品
		getPaymentList({
			isFree: 0,
			current: data.currentPage,	
			size: 10
		}).then(res => {
			// 最大限制
			if (data.currentPage >= 5) {
				data.showMsg = 1	
				return false
			}
			data.showMsg = 2
			// 合并/第一次请求
			if (data.currentPage == 1) {
				data.paymentList = res.data.data.records
			} else {
				data.paymentList = [...data.paymentList, ...res.data.data.records]
			}
		})
	}

	// 调用付费
	getPaymentLists()

	// 背景图切换事件
	const change = (e) => {
		data.current = e.detail.current
		data.bannerBackground = data.bannerData[e.detail.current].background
	}

	// 页面触底事件
	onReachBottom(() => {
		data.currentPage = data.currentPage + 1
		getPaymentLists()
	})

	// 页面刷新
	onPullDownRefresh(() => {
		data.currentPage = 1
		getPaymentLists()
		// 定时器结束动画
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	})
	
	

	// 使用 toRefs
	const {
		bannerData,
		current,
		bannerBackground,
		categoryData,
		hotList,
		newList,
		freeList,
		paymentList,
		showMsg,
		showFlag
	} = toRefs(data)
</script>

<style lang='scss'>
	.banner-box {
		padding-top: 90rpx;
	}

	.category-box {
		width: 100%;
		margin: 10px 0;
	}

	.null {
		margin-top: 80px;
		height: 1px;
	}
</style>
