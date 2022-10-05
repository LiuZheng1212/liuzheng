<template>
	<view class="wrap" v-for="(item, index) in data.floorList" :key="index">
		<view class="images_title">
			<image :src="item.floor_title.image_src" mode=""></image>
		</view>
		<u-row gutter="16" justify="center">
			<u-col span="4">
				<u-grid :col="1" :border="false">
					<u-grid-item>
						<image :src="item.product_list[0].image_src" style="width: 100%; height: 420rpx;"></image>
					</u-grid-item>
				</u-grid>
			</u-col>
			<u-col span="8">
				<u-grid :col="2" :border="false">
					<u-grid-item v-for="(child,Idx) in item.product_list" :key="Idx" v-show="Idx != 0">
						<image :src="child.image_src" class="img"></image>
					</u-grid-item>
				</u-grid>
			</u-col>
		</u-row>
	</view>
</template>

<script lang="ts" setup>
	import { reactive } from 'vue'
	import { getFloor } from '@/api/api.ts'
	import { ProductList,FloorData, Code } from '@/api/define.ts'
	
	const data:{
		floorList: ProductList
	} = reactive({
		floorList: []
	})
	
	getFloor().then((res:FloorData)=> {
		if(res.meta.status == Code.SUCCESS) {
			data.floorList = res.message
		}
	})
	
</script>

<style lang="scss">
	.wrap {
		padding: 0 !important;
		.images_title {
			height: 100rpx;
			position: relative;
			image {
				height: 50rpx;
				position: absolute;
				top: 40rpx;
			}
		}
		.img {
			width: 230rpx;
			height: 180rpx;
		}
	}
	
</style>
