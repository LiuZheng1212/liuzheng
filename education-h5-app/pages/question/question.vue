<template>
	<!-- 头部背景 -->
	<view class="topBg" />

	<my-question :replyList="replyList" :flag="flag"></my-question>

	<!-- 导航栏 -->
	<my-nav :data="navList" @chengNav="chengNav"></my-nav>

	<!-- 返回顶部 -->
	<back-top :showFlag="showFlag"></back-top>
</template>

<script setup>
	import {
		getReplyList
	} from '../../api/api.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	import {
		timer
	} from '@/utils/time.js'
	import {
		onReachBottom,
		onPullDownRefresh,
		onPageScroll
	} from "@dcloudio/uni-app";

	const data = reactive({
		// 问答列表
		replyList: [],
		// 导航栏数据
		navList: [{
			id: 0,
			type: 'hot',
			name: '热门回答'
		}, {
			id: 1,
			type: 'new',
			name: '最新回答'
		}, {
			id: 2,
			type: 'wait',
			name: '等待回答'
		}, ],
		// 当前页码
		currentPage: 1,
		// 返回顶部按钮
		showFlag: false,
		// 暂无消息提示
		flag: false,
		// 暂存类型
		type:'hot'
	})

	// 封装请求问答列表
	const getList = (type) => {
		getReplyList({
			type,
			current: data.currentPage,
			size: 10
		}).then(res => {
			if (data.currentPage >= 5) {
				data.flag = 1
				return false
			}
			data.flag = 0
			if (data.currentPage == 1) {
				data.replyList = res.data.data.records
			} else {
				data.replyList = [...data.replyList, ...res.data.data.records]
			}
		})
	}

	// 监听页面滚动
	onPageScroll((e) => {
		if (e.scrollTop > 300) {
			data.showFlag = true
		} else {
			data.showFlag = false
		}
	})

	getList('hot')

	// 切换导航栏
	const chengNav = (id) => {
		const type = data.navList.filter(item => item.id == id)[0].type
		data.type = type
		getList(type)
	}

	// 触底加载
	onReachBottom(() => {
		data.currentPage++
		getList('hot')
	})

	// 下拉刷新
	onPullDownRefresh(() => {
		data.currentPage = 1
		data.flag = 0
		getList(data.type)
		// 定时器结束动画
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	})

	const {
		replyList,
		navList,
		showFlag,
		flag
	} = toRefs(data)
</script>

<style lang="scss">
	.topBg {
		background-color: #345DC2;
		height: 45px;
	}
</style>
