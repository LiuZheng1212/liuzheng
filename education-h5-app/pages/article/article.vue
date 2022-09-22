<template>
	<!-- 头部背景 -->
	<view class="topBg" />

	<!-- 导航栏 -->
	<my-nav :data="navList" @chengNav="chengNav"></my-nav>

	<my-article :articleList="articleList" :flag="flag"></my-article>

	<!-- 返回顶部 -->
	<back-top :showFlag="showFlag"></back-top>
</template>

<script setup>
	import {
		onReachBottom,
		onPullDownRefresh,
		onPageScroll
	} from "@dcloudio/uni-app";
	import {
		getArticleList,
		getHotrecom
	} from '../../api/api.js'
	import {
		reactive,
		toRefs
	} from 'vue'

	const data = reactive({
		// 文章列表数据
		articleList: [],
		// 返回顶部的状态
		showFlag: false,
		// 当前页码
		currentPage: 1,
		// 暂无消息提示
		flag: 0,
		// 导航栏数据
		navList: [],
		// 导航栏id
		navId: 0
	})

	// 监听页面滚动事件
	onPageScroll((e) => {
		if (e.scrollTop > 300) {
			data.showFlag = true
		} else {
			data.showFlag = false
		}
	})

	// 切换数据
	const chengNav = (id) => {
		data.navId = id
		getGroomList(id)
	}

	// 请求导航栏数据
	getHotrecom().then(res => {
		data.navList = res.data.data
		data.navList.unshift({
			id: 0,
			name: '推荐'
		})
	})

	// 封装请求阅读文章列表
	const getGroomList = (id) => {
		getArticleList({
			current: data.currentPage,
			size: 10,
			categoryId: id
		}).then(res => {
			if (data.currentPage >= 5) {
				data.flag = 1
				return false
			}
			data.flag = 0
			if (data.currentPage == 1) {
				data.articleList = res.data.data.records
			} else {
				data.articleList = [...data.articleList, ...res.data.data.records]
			}
		})
	}

	getGroomList()

	// 触底加载
	onReachBottom(() => {
		data.currentPage++
		getGroomList()
	})

	// 下拉刷新
	onPullDownRefresh(() => {
		data.currentPage = 1
		data.flag = 0
		getGroomList(data.navId)
		// 定时器结束动画
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	})

	const {
		articleList,
		showFlag,
		flag,
		navList
	} = toRefs(data)
</script>

<style lang="scss">
	.topBg {
		background-color: #345DC2;
		height: 45px;
	}
</style>
