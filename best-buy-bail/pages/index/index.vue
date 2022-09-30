<template>
	<!-- 顶部导航栏 -->
	<view class="btn-box">
		<u-button class="btn" @click="gosearch">搜索</u-button>
	</view>
	<!-- banner -->
	<view class="banner">
		<u-swiper :list="data.bannerList" height="340" name="image_src"></u-swiper>
	</view>
	<!-- 中间导航栏数据 -->
	<view class="catitems">
		<view class="imgbox" v-for="item,index in data.homeCateList" :key="index">
			<image class="img" :src="item.image_src" mode="widthFix"></image>
		</view>
	</view>
	<!-- 楼层 -->
	<view class="floorbox">
		<view class="floor-item" v-for="item,index in data.floorData" :key="index">
			<HomeFloor :data="item"></HomeFloor>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { getBanner ,getHomeCate ,getFloorData} from '@/api/api'
	import HomeFloor from '@/components/homefloor/homefloor.vue'
	import { reactive } from 'vue'
	const data = reactive({
		bannerList:[],
		homeCateList:[],
		floorData:[],
	})
	
	const gosearch = ()=>{
		uni.navigateTo({
			url:'/pages/search/search'
		})
	}
	//获取轮播图
	getBanner().then((res:any)=>{
		data.bannerList = res.message
	})
	// 获取首页导航栏数据
	getHomeCate().then((res:any)=>{
		data.homeCateList = res.message
	})
	getFloorData().then((res:any)=>{
		data.floorData = res.message
	})
</script>

<style lang="scss">
.btn-box{
	background-color: #eb4450;
	padding: 10rpx;
	height: 90rpx;
	.btn{
		height: 70rpx;
	}
}
.banner{
	width: 100%;
	height: 340rpx;
}
.catitems{
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding: 20rpx 0;
	.imgbox{
		text-align: center;
		flex: 1;
		.img{
			width: 148rpx;
		}
	}
}
.floorbox{
	.floor-item{
		margin: 20rpx 0;
	}
}
</style>
