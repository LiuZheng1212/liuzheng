<template>
	<view class="content">
		<view class="header">
			<view class="search">
				搜索
			</view>
		</view>
		<view class="banner">
			<u-swiper :list="data.banner" name="image_src" height="300"></u-swiper>
		</view>
		<view class="nav">
			<view class="nav-item" v-for="item in data.navList" :key="item.id">
				<image :src="item.image_src" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		getSwiperData,
		getNavData
	} from '@/api/api.ts'
	import * as TS from './define.ts'
	import {
		reactive
	} from 'vue'
	const data: any = reactive({
		banner: [], // 轮播图数据
		navList: []
	})
	// 获取轮播图
	getSwiperData().then((res: TS.Swiper) => {
		data.banner = res.message
	})
	// 获取导航栏
	getNavData().then((res:TS.NavData) => {
		console.log(res)
		data.navList = res.message
	})
</script>

<style lang="scss">
	.nav {
		display: flex;
		justify-content: space-between;

		.nav-item {
			width: 25%;
			text-align: center;
			margin: 20rpx 0;

			image {
				width: 130rpx;
				height: 140rpx;
			}
		}
	}

	.header {
		padding: 10rpx;
		background-color: #d75255;

		.search {
			width: 100%;
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			background-color: #fff;
			border-radius: 20rpx;
			color: #333;
			font-size: 26rpx;
		}
	}
</style>
