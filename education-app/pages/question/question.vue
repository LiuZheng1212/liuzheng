<template>
	<view class="content">
		<view class="box">
			<view class="header">
				<!-- 搜索 -->
				<searchCom></searchCom>
			</view>
			<!-- 分类 -->
			<view class="cate-box">
				<view :class="{'cate-item': true, 'active': name == 'hot'}" @click="selectItem('hot')">
					热门回答
				</view>
				<view :class="{'cate-item': true, 'active': name == 'new'}" @click="selectItem('new')">
					最新问题
				</view>
				<view :class="{'cate-item': true, 'active': name == 'wait'}" @click="selectItem('wait')">
					等待回答
				</view>
			</view>
		</view>

		<!-- 内容 -->
		<view class="ask-box">
			<view class="ask-item" v-for="item in answerList" :key="item.id" @click="toDetails(item.id)">
				<view class="fir-text">
					{{ item.title }}
				</view>
				<view class="sec-text">
					<view class="left">
						{{ item.reply }}回答 · {{ item.viewCount }}浏览
					</view>
					<view class="right">
						{{ item.nickName }}是 · {{ item.createDate }}
					</view>
				</view>
			</view>
		</view>
		<image @click="scrolTop" class="scrollTop" v-show="flag" src="../../static/images/scrollTop.png" mode="">
		</image>
	</view>
</template>

<script>
	import {
		answer,
		challenge,
		answers
	} from '../../api/question.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	import {
		onPageScroll,
		onPullDownRefresh,
		onReachBottom
	} from '@dcloudio/uni-app'
	export default {
		setup() {
			const data = reactive({
				answerList: [],
				page: 1,
				pageSize: 10,
				flag: false,
				name: 'hot'
			})

			answer({
				page: data.page,
				pageSize: data.pageSize
			}).then(res => {
				data.answerList = res.data.records
			})
			// 选中
			const selectItem = (val) => {
				data.name = val
				if(data.name == 'hot') {
					answer({
						page: data.page,
						pageSize: data.pageSize
					}).then(res => {
						data.answerList = res.data.records
					})
				} else if(data.name == 'new') {
					challenge({
						page: data.page,
						pageSize: data.pageSize
					}).then(res => {
						data.answerList = res.data.records
					})
				} else {
					answers({
						page: data.page,
						pageSize: data.pageSize
					}).then(res => {
						data.answerList = res.data.records
					})
				}
			}
			// 监听滚动条
			onPageScroll((e) => {
				data.scrollTop = e.scrollTop
				if (e.scrollTop >= 400) {
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
				if(data.name == 'hot') {
					answer({
						page: data.page,
						pageSize: data.pageSize
					}).then(res => {
						data.answerList = res.data.records
					})
				} else if(data.name == 'new') {
					challenge({
						page: data.page,
						pageSize: data.pageSize
					}).then(res => {
						data.answerList = res.data.records
					})
				} else {
					answers({
						page: data.page,
						pageSize: data.pageSize
					}).then(res => {
						data.answerList = res.data.records
					})
				}
				// 停止下拉
				uni.stopPullDownRefresh()
			})

			// 触底加载
			onReachBottom(() => {
				data.page++
				if(data.name == 'hot') {
					answer({
						page: data.page,
						pageSize: data.pageSize
					}).then(res => {
						data.answerList = [...data.answerList, ...res.data.records]
					})
				} else if(data.name == 'new') {
					challenge({
						page: data.page,
						pageSize: data.pageSize
					}).then(res => {
						data.answerList = [...data.answerList, ...res.data.records]
					})
				} else {
					answers({
						page: data.page,
						pageSize: data.pageSize
					}).then(res => {
						data.answerList = [...data.answerList, ...res.data.records]
					})
				}
			})
			
			// 跳转详情
			const toDetails = (id) => {
				uni.navigateTo({
					url: `/pages/question/details?id=${id}`
				})
			}

			return {
				...toRefs(data),
				scrolTop,
				selectItem,
				toDetails
			}
		}
	}
</script>

<style lang="scss">
	.ask-box {
		width: 100%;

		.ask-item {
			width: 100%;
			border-bottom: 1px solid #eee;
			padding: 4%;
			box-sizing: border-box;

			.fir-text {
				font-weight: 700;
				font-size: 35rpx;
			}

			.sec-text {
				display: flex;
				justify-content: space-between;
				margin: 2% 0;
				color: gray;
				font-size: 25rpx;
			}
		}
	}

	.box {
		position: sticky;
		left: 0;
		top: 0;
		z-index: 22;
	}

	.article-box {
		width: 100%;

	}

	.cate-box {
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #e7e7e7;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		border: none;

		.cate-item {
			height: 70rpx;
			line-height: 70rpx;
		}
	}

	.active {
		border-bottom: 6rpx solid #077dff;
		color: #077dff;
	}

	.header {
		width: 100%;
		padding: 15rpx;
		background-color: #0072b7;
		position: sticky;
		top: 0;
		z-index: 1;
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
</style>
