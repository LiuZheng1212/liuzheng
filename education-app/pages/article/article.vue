<template>
	<view class="content">
		<view class="box">
			<view class="header">
				<!-- 搜索 -->
				<searchCom></searchCom>
			</view>

			<!-- 分类 -->
			<scroll-view scroll-x="true">
				<view class="cate-box">
					<view :class="{'cate-item':true,'active':Idx == null}" @click="selectClas(null, null)">
						推荐
					</view>
					<view :class="{'cate-item':true,'active':index == Idx}" @click="selectClas(item.id,index)"
						v-for="(item,index) in classifyList" :key="item.id">
						{{ item.name }}
					</view>
				</view>
			</scroll-view>
		</view>

		<!-- 内容 -->
		<view class="article-box">
			<view class="article-item" v-for="item in list" :key="item.id" @click="toDetails(item.id)">
				<view class="left">
					<view class="fir-text">
						{{ item.title }}
					</view>
					<view class="sec-text">
						{{ item.summary }}
					</view>
					<view class="bottom-text">
						<view class="name">
							{{ item.nickName }}
						</view>
						<view>
							{{ item.updateDate }} · {{ item.thumhup }}赞
						</view>

					</view>
				</view>
				<view class="right" v-if="item.imageUrl">
					<image :src="item.imageUrl" mode=""></image>
				</view>
			</view>
		</view>
		<image @click="scrolTop" class="scrollTop" v-show="flag" src="../../static/images/scrollTop.png" mode="">
		</image>
	</view>
</template>

<script>
	import {
		onPageScroll,
		onPullDownRefresh,
		onReachBottom
	} from '@dcloudio/uni-app'
	import {
		classify,
		selectClassify,
	} from '../../api/article.js'
	import { useRouter } from 'vue-router'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			
			const router = useRouter()
			const data = reactive({
				id: null,
				classifyList: [],
				list: [],
				Idx: null,
				page: 1,
				pageSize: 10,
				flag: false
			})
			// 分类
			classify().then(res => {
				data.classifyList = res.data
			})
			// 列表数据
			selectClassify({
				id: data.id,
				page: data.page,
				pageSize: data.pageSize
			}).then(res => {
				data.list = res.data.records
			})
			// 选中高亮
			const selectClas = (id, index) => {
				if (data.Idx == index) {
					return
				}
				data.Idx = index
				data.id = id
				selectClassify({
					id: data.id,
					page: data.page,
					pageSize: data.pageSize
				}).then(res => {
					data.list = res.data.records
				})
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
				selectClassify({
					id: data.id,
					page: data.page,
					pageSize: data.pageSize
				}).then(res => {
					data.list = res.data.records
				})
				// 停止下拉
				uni.stopPullDownRefresh()
			})

			// 触底加载
			onReachBottom(() => {
				data.page++
				selectClassify({
					id: data.id,
					page: data.page,
					pageSize: data.pageSize
				}).then(res => {
					console.log(res);
					data.list = [...data.list, ...res.data.records]
				})
			})
			
			// 跳转详情
			const toDetails = (id) => {
				router.push(`/pages/article/details?id=${id}`)
			}
			
			return {
				...toRefs(data),
				selectClas,
				scrolTop,
				toDetails
			}
		}
	}
</script>

<style lang="scss">
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
	.box {
		position: sticky;
		left: 0;
		top: 0;
		z-index: 22;
	}

	.article-box {
		width: 100%;

		.article-item {
			width: 100%;
			display: flex;
			border-bottom: 1px solid #eee;
			padding: 3%;
			box-sizing: border-box;

			.left {
				width: 66%;

				.fir-text {
					font-weight: 700;

				}

				.sec-text {
					font-size: 25rpx;
					color: #7e7e7e;
					margin: 2% 0 4% 0;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.bottom-text {
					width: 100%;
					display: flex;
					font-size: 25rpx;
					color: #7e7e7e;

					.name {
						color: black;
					}
				}
			}

			.right {
				width: 30%;
				margin-left: 2%;

				image {
					width: 100%;
					height: 75%;
					border-radius: 6%;

				}
			}
		}

	}

	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		color: transparent;
	}

	.cate-box {
		width: 1800rpx;
		height: 80rpx;
		border-bottom: 1px solid #e7e7e7;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		border: none;
		border-bottom: 1px solid #eee;

		.cate-item {
			font-size: 28rpx;
			height: 70rpx;
			line-height: 70rpx;
		}
	}

	.active {
		border-bottom: 3rpx solid #077dff;
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
</style>
