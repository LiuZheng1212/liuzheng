<template>
	<view class="content">
		<div class="imga" v-show="flag">
			<image @click="toTop" src="../../static/images/jt.png" mode=""></image>
		</div>
		<search class="search" :Background="Background"></search>
		<!-- 轮播图 -->
		<banner :bannerList="bannerList" @swiperItem="swiperItem"></banner>
		<!-- 分类搜索 -->
		<view class="cate-box">
			<view v-for="item in list" :key="item.id" @click="toContentView(item.name)">{{item.name}}</view>
			
			<view @click="btn">全部分类</view>
		</view>
		<view class="list-container">
			<!-- 热门推荐 -->
			<textView></textView>
			<!-- 热门列表 -->
			<courseView :hotList="hotList"></courseView>
			<!-- 近期上新 -->
			<textsView></textsView>
			<!-- 近期列表 -->
			<scroll-view scroll-x="true" :show-scrollbar="false">
				<view class="content-box">
					<newCourse :newList="newList"></newCourse>
				</view>
			</scroll-view>

			<!-- 免费精选 -->
			<textssView></textssView>
			<!-- 免费精选列表 -->
			<freeView :freeList="freeList"></freeView>
			<!-- 付费精选 -->
			<textsssView></textsssView>
			<!-- 付费列表 -->
			<nickView :nickList="nickList"></nickView>
		</view>
	</view>
</template>

<script>
	import {onPageScroll,onReachBottom} from '@dcloudio/uni-app'
	import {
		useRouter
	} from 'vue-router'
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	import {
		getBanner,
		list,
		hot,
		news,
		free,
		nick
	} from '@/api/http/http.js'
	export default {
		setup() {
			const router = useRouter()
			const data=reactive({
				Background: '#006C00',
				flag:false,//状态
				bannerList:[],//轮播图
				list:[],//分类数据
				hotList:[],//热门数据
				newList:[],//近期上新
				freeList:[],//免费精选
				nickList:[],//付费精选
				current:1,//页数
				size:10//条数
			})
			// 点击跳转全部
			const btn = () => {
				console.log(1);
				router.push('/pages/contentView/contentView')
			}
			// 请求轮播图数据
			getBanner().then(res => {
				// console.log(res);
				data.bannerList=res.data
			})
			// 分类数据
			list().then(res=>{
				// console.log(res);
				data.list=res.data.splice(0,7)
			});
			// 请求热门数据
			hot().then(res=>{
				// console.log(res);
				data.hotList=res.data.records
			});
			// 请求近期上新
			news().then(res=>{
				// console.log(res);
				data.newList=res.data.records
			});
			// 请求免费精选
			free().then(res=>{
				console.log(res.data.records);
				data.freeList=res.data.records
			});
			// 请求付费精选
			nick(data.current,data.size).then(res=>{
				// console.log(res);
				if(data.current==1){
					data.nickList=res.data.records
				}else{
					data.nickList=[...data.nickList,...res.data.records]
				}
				
			});
			// 背景图
			const swiperItem = (bgc) => {
				data.Background = bgc
			}
			// 回顶部
			const toTop=()=>{
				uni.pageScrollTo({
					scrollTop:0
				})
			}
			// 监听滚动条
			onPageScroll((e)=>{
				// console.log(e.scrollTop);
				if(e.scrollTop>=800){
					data.flag=true
				}else{
					data.flag=false
				}
			})
			// 上拉加载
			onReachBottom(()=>{
				data.current++
				// 请求付费精选
				nick(data.current,data.size).then(res=>{
					// console.log(res);
					if(data.current==1){
						data.nickList=res.data.records
					}else{
						data.nickList=[...data.nickList,...res.data.records]
					}
					
				});
			})
			// 去课程页面
			const toContentView=(name)=>{
				console.log(name);
				uni.navigateTo({
					url:`/pages/contentView/contentView?name=${name}`
				})
			}
			return {
				...toRefs(data),
				btn,
				swiperItem,
				toTop,
				toContentView
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.imga{
		position: fixed;
		bottom: 10%;
		right: 10%;
		image{
			
			width: 100rpx;
			height: 100rpx;
		}
	}
	// 分类区域
	.list-container {
		.scroll-view {
			white-space: nowrap;
		}
		.content-box {
			box-sizing: border-box;
			padding: 25rpx 5rpx;
			display: flex;
			width: 240vh;
		}
	}
	.header {
		margin-top: 20rpx;
	}

	.cate-box {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		align-items: center;
		box-sizing: border-box;
		margin-top: 30rpx;

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
		width: 100%;
		position: relative;
	}

	.search {
		position: sticky;
		top: 0;
		z-index: 1;
	}
</style>
