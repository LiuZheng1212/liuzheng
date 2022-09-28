<template>
	<view>
		<swiper @change="swiperItem" :indicator-dots="true" indicator-active-color="#fff" :autoplay="true" :interval="3000" :duration="1500">
			<swiper-item class="swiper-item" v-for="(item,index) in banners" :key="index" :style="`background-image: linear-gradient(${item.background}, #fff);`">
				<view>
					<image :src="'../..'+item.imageUrl"></image>
				</view>
			</swiper-item>
		<!-- 	<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/banner1.jpg"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/banner3.jpg"></image>
				</view>
			</swiper-item> -->
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "banner",
		props:['banners'],
		setup(props, ctx) {
			const swiperItem = (e) => {
				ctx.emit('swiperItem', props.banners[e.detail.current].background)
			}
			return {
				swiperItem
			}
		}
	}
</script>

<style>
	swiper {
		height: 380rpx;
	}

	.swiper-item {
		padding: 26rpx;
		box-sizing: border-box;
	}
	image {
		width: 100%;
		height: 350rpx;
		border-radius: 25rpx;
	}
</style>
