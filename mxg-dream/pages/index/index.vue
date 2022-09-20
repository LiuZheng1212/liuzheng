<template>
	<view class="content">
		<search class="search" :bac="bac"></search>
		<!-- 轮播图 -->
		<banner @a="a">
		</banner>
		<!-- 分类搜索 -->
		<view class="tab">
			<view class="tabList" v-for="(item,index) in list" :key="index" @click="to(item.id)">
				{{item.name}}
			</view>
			<view class="tabList">
				全部分类
			</view>
		</view>
		<view class="list-container">
			<!-- 热门推荐 -->
			<textView style="margin-bottom:20rpx;"></textView>
			<!-- 商品列表 -->
			<courseView></courseView>

			<!-- 近期上新 -->
			<textView></textView>
			<!-- 商品列表 -->
			<scroll-view scroll-x="true" :show-scrollbar="false">
				<view class="content-box">
					<newCourse></newCourse>
					<newCourse></newCourse>
					<newCourse></newCourse>
					<newCourse></newCourse>
				</view>
			</scroll-view>

			<!-- 免费精选 -->
			<textView></textView>
			<!-- 商品列表 -->
			<!-- <courseView></courseView> -->
			<courseView></courseView>
		</view>
	</view>
</template>

<script>
	import {
		getList
	} from "@/utils/home.js";
	import {
		reactive,
		toRefs,
		ref
	} from "vue";
	export default {
		setup(props, context) {
			const data = reactive({
				list: [], // 存放tab
			});
			
			getList().then(res => {
				data.list = res.data.splice(0, 7)
			})
			const to=(id)=>{
				uni.navigateTo({
					url:'/pages/detailView/detailView?id='+id
				})
			}
			const bac=ref('')
			const a=(str)=>{
				bac.value=str
			}
			return {
				...toRefs(data),
				to,
				a,
				bac
			};
		}
	}
</script>

<style lang="scss" scoped>
	// 分类区域
	.list-container {
		.scroll-view {
			white-space: nowrap;
		}

		.content-box {
			display: flex;
			width: 130vh;
			margin-bottom: px;
		}
	}

	.header {
		margin-top: 20rpx;
	}

	.tab {
		display: flex;
		margin-top: 20rpx;
		flex-wrap: wrap;
		justify-content: space-around;
		text-align: center;
		line-height: 70rpx;
		margin-bottom: 30rpx;

		.tabList {
			margin-top: 20rpx;
			font-size: 26rpx;
			border-radius: 20rpx;
			width: 160rpx;
			height: 70rpx;
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
