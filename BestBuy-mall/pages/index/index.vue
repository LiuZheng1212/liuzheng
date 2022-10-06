<template>
	<view class="content">
		<searchInput></searchInput>
		<view class="banner">
			<u-swiper :list="data.banner" name="image_src" height="300"></u-swiper>
		</view>
		<view class="nav">
			<u-grid :col="4"  class="nav-item" :border="false">
				<u-grid-item v-for="item in data.navList" :key="item.id">
					<image :src="item.image_src" mode=""></image>
				</u-grid-item>
			</u-grid>
		</view>
		<view>
			<homeFlor></homeFlor>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import homeFlor from './homeFlor/homeFlor.vue'
	import {
		getSwiperData,
		getNavData
	} from '@/api/api.ts'
	import * as TS from '@/api/define.ts'
	import {
		reactive
	} from 'vue'
	const data: {
		banner: TS.SwiperData,
		navList: TS.NavData.message
	} = reactive({
		banner: [], // 轮播图数据
		navList: [],
	})
	// 获取轮播图
	getSwiperData().then((res: TS.Swiper) => {
		if(res.meta.status == TS.Code.SUCCESS) {
			data.banner = res.message
		}
	})
	// 获取导航栏
	getNavData().then((res: TS.NavData) => {
		if(res.meta.status == TS.Code.SUCCESS) {
			data.navList = res.message
		}
	})
</script>

<style lang="scss">
	.nav {
		image {
			width: 130rpx;
			height: 140rpx;
		}
	}
</style>
