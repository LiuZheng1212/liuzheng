<template>
	<view>

		<view class="posi-top">
			<uni-popup ref="popup" type="top" class="pop" @maskClick="closePop">
				<view class="box">
					<!-- 课程综合排序 -->
					<view class="sort-pop" v-if="sortId==1" v-for="item,index in firSort" :key="index"
						@click="changeAll(item.sort, item.name)">
						<p :class="{'sort-active':popName==item.name}">{{item.name}}</p>
					</view>

					<!-- 课程排序 -->
					<view class="sec-pop" v-if="sortId==2" v-for="item,i in courseSort" :key="i"
						@click="changeCourse(item.isFree,item.name)">
						<p :class="{'sort-active':courseName==item.name}">{{item.name}}</p>
					</view>
				</view>
				<!-- 全部分类 -->
				<view class="thr-box" v-if="sortId==3">
					<catePop @cateDetail="cateDetail"></catePop>
				</view>
			</uni-popup>
			<!-- 回到顶部 -->
			<image class="top-pic" src="../../static/images/top.png" mode="" v-show="flag" @click="touchTop"></image>
			<!-- 搜索区域 -->
			<view class="top-inp">
				<myInput class="top-ipt" v-model="searchVal" @searchOk="searchOk"></myInput>
			</view>
			<!-- 分类导航 -->
			<view class="cate-box">
				<p :class="{active:currentIndex==index}" v-for="item,index in cateNav" :key="index"
					@click="changeCate(index)">{{item.name}}</p>
			</view>


			<view class="select-box">
				<p @click="openPop(1)" :class="{'sort-active': popName != '综合排序'}">
					<span>{{popName}}
						<image v-if="popFlag" src="../../static/images/bluejt.png" mode=""></image>
						<image v-else src="../../static/images/graybot.png" mode=""></image>
					</span>
				</p>
				<p @click="openPop(2)" :class="{'sort-active': courseName != '全部课程'}" v-show="currentIndex==0">
					<span>{{courseName}}
						<image v-if="popFlag2" src="../../static/images/bluejt.png" mode=""></image>
						<image v-else src="../../static/images/graybot.png" mode=""></image>
					</span>
				</p>
				<p @click="openPop(3)" :class="{'sort-active': cateName != '全部分类'}">
					<span>{{cateName}}
						<image v-if="popFlag3" src="../../static/images/bluejt.png" mode=""></image>
						<image v-else src="../../static/images/graybot.png" mode=""></image>
					</span>
				</p> 
			</view>
		</view> 

		<view class="content-box">
			<view class="fir-box" v-show="currentIndex==0">
				<courseView :hotList="courseList"></courseView>
			</view>
			<view class="sec-box" v-show="currentIndex==1">
				<articleView :articleList="articleData"></articleView>
			</view>
			<view class="thr-box" v-show="currentIndex==2">
				<askDataList :askList="askData"></askDataList>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs,
		ref
	} from "vue"
	import {
		useRoute
	} from 'vue-router'
	import {
		getCourseList,
		getArticleData,
		getAskData
	} from '@/api/content.js'
	import {
		onReachBottom,
		onPageScroll
	} from '@dcloudio/uni-app'
	export default {
		setup() {
			const data = reactive({
				cateName: '全部分类',
				cateNav: [{
						name: '课程',
						id: 1
					},
					{
						name: '文章',
						id: 2
					},
					{
						name: '问答',
						id: 3
					}
				],
				currentIndex: 0,
				categoryId: 0,
				courseList: [], //课程数据
				articleData: [],
				askData: [],
				current: 1,
				size: 10,
				flag: false,
				scroll: 0,
				popFlag: false,
				popFlag2: false,
				popFlag3: false,
				popCate: [{
						name: '综合排序',
						id: 1
					}, {
						name: '全部课程',
						id: 2
					},
					{
						name: '全部分类',
						id: 3
					}
				],
				sortId: 1,

				firSort: [{
						name: '综合排序',
						sort: 'null'
					}, {
						name: '最新排序',
						sort: 'new'
					},
					{
						name: '热门排序',
						sort: 'hot'
					}
				],
				sortCourse: null,
				courseSort: [{
						name: '全部课程',
						isFree: null
					}, {
						name: '付费课程',
						isFree: 0
					},
					{
						name: '免费课程',
						isFree: 1
					}
				],
				courseIsFree: null,
				popName: '综合排序',
				courseName: '全部课程',
				labelId: null,
				searchVal: ''
			})
			const popup = ref(null)
			// 获取课程数据
			const getCourse = () => {
				getCourseList(data.labelId, data.current, data.size, data.sortCourse, ).then(res => {
					// console.log(res);
					if (data.current == 1) {
						data.courseList = res.data.records
					} else {
						data.courseList = [...data.courseList, ...res.data.records]
					}
				})
			}
			getCourse()
			// 获取文章数据
			const getArticle = () => {
				getArticleData(data.labelId, data.current, data.size).then(res => {
					// console.log(res);
					if (data.current == 1) {
						data.articleData = res.data.records
					} else {
						data.articleData = [...data.articleData, ...res.data.records]
					}
				})
			}
			getArticle()
			// 获取问答数据
			const getAsk = () => {
				getAskData().then(res => {
					if (data.current == 1) {
						data.askData = res.data.records
					} else {
						data.askData = [...data.askData, ...res.data.records]
					}
				})
			}
			getAsk()
			// 切换分类
			const changeCate = (index) => {
				data.currentIndex = index
			}
			// 点击遮罩层关闭弹框
			const closePop = () => {
				popup.value.close()
			}
			// 打开弹框
			const openPop = (id) => {
				// console.log(id);
				if(id == 2 || id == 3 && data.popFlag) {
					popup.value.close()
					data.popFlag2 = false
					data.popFlag3 = false
					return 
				}
				if(id == 1 || id == 3 && data.popFlag2) {
					popup.value.close()
					data.popFlag1 = false
					data.popFlag3 = false
					return
				}
				if(id == 1 || id == 2 && data.popFlag3) {
					popup.value.close()
					data.popFlag = false
					data.popFlag2 = false
					return
				}
				if (id == 1) {
					data.popFlag = !data.popFlag
				} else if (id == 2) {
					data.popFlag2 = !data.popFlag2
				} else {
					data.popFlag3 = !data.popFlag3
				}
				data.sortId = id
				if (data.popFlag || data.popFlag2 || data.popFlag3) {
					popup.value.open()
				} else {
					data.popFlag = false
					data.popFlag2 = false
					data.popFlag3 = false
					popup.value.close()
				}
			}
			// 关闭弹出层
			const changeId = () => {
				popup.value.close()
			}

			// 综合排序
			const changeAll = (val, name) => {
				data.popFlag = false
				data.sortCourse = val
				data.popName = name
				console.log(data.sortCourse);
				// 获取课程数据
				if (data.currentIndex == 0) {
					getCourse()
				}
				if (data.currentIndex == 1) {
					// 获取文章数据
					getArticle()
				}
				if (data.currentIndex == 2) {
					// 获取问答数据
					getAsk()
				}

				popup.value.close()
			}
			// 全部课程排序
			const changeCourse = (isFree, name) => {
				data.popFlag2 = false
				data.courseIsFree = isFree
				data.courseName = name
				// 获取课程数据
				getCourse()
				popup.value.close()
			}

			// 上拉加载
			onReachBottom(() => {
				data.current++
				if (data.currentIndex == 0) {
					getCourse()
				} else if (data.currentIndex == 1) {
					getArticle()
				} else {
					getAsk()
				}
			})
			// 监听页面滚动
			onPageScroll((e) => {
				// console.log(e.scrollTop);
				data.scroll = e.scrollTop
				if (e.scrollTop >= 1200) {
					data.flag = true
				} else {
					data.flag = false
				}
			})

			// 回到顶部
			const touchTop = () => {
				uni.pageScrollTo({
					scrollTop: 0
				})
			}
			// 去详情页
			const cateDetail = (obj) => {
				data.popFlag3 = false
				if (data.currentIndex == 0) {
					getCourse()
				} else if (data.currentIndex == 1) {
					getArticle()
				} else {
					getAsk()
				}
				data.labelId = obj.id
				data.cateName = obj.name
				popup.value.close()
			}
			
			const searchOk = (e) => {
				getCourse()
			}

			return {
				...toRefs(data),
				changeCate,
				touchTop,
				popup,
				closePop,
				openPop,
				changeId,
				changeAll,
				changeCourse,
				cateDetail,
				searchOk
			}
		}
	}
</script>

<style lang="scss">
	.pop {
		z-index: -2;

		.box {
			margin-top: 25%;
			width: 100%;
			padding: 0 0 0 10%;
			background-color: #fff;

			.sort-pop,
			.sec-pop {
				display: flex;
				flex-direction: column;

				p {
					height: 80rpx;
					line-height: 80rpx;
				}
			}
		}
	}

	.top-inp {
		background-color: #fff;
	}

	.select-box {
		width: 100%;
		height: 100rpx;
		background-color: rgba(0, 0, 0, 0.01);
		border-bottom: 1px solid #fafafa;
		display: flex;
		justify-content: space-around;
		align-items: center;

		p {
			display: inline-block;

			image {
				width: 20rpx;
				height: 20rpx;
				margin-left: 8rpx;
			}
		}
	}

	.top-pic {
		position: fixed;
		bottom: 15%;
		right: 5%;
		width: 100rpx;
		height: 100rpx;
		z-index: 33;
	}

	.posi-top {
		position: sticky;
		top: 0;
		left: 0;
		background-color: white;
		z-index: 22;
	}

	.content-box {
		width: 100%;
	}

	.active {
		color: #007aff;
		border-bottom: 6rpx solid #007aff;
	}

	.sort-active {
		color: #007aff;
	}

	.cate-box {
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #f7f7f7;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: white;

		p {
			display: inline-block;
			height: 68rpx;
			line-height: 68rpx;
		}
	}
</style>
