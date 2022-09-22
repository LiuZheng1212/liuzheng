<template>
	<swiper class="swiper-box" @change="change" :current="current" indicator-dots indicator-color="#ccc"
		indicator-active-color="#fff" autoplay circular interval="2000">
		<swiper-item v-for="(item ,index) in bannerData" :key="index">
			<view class="swiper-item">
				<img :src="'http://m.mengxuegu.com'+item.imageUrl" alt="">
			</view>
		</swiper-item>
	</swiper>	
</template>

<script>
	export default {
		props: ['bannerData','current'],
		setup(props,ctx) {
			const change = (e) => {
				ctx.emit('change', e)
			}
			
			return {
				change
			}
		}
	}
</script>

<style lang='scss'>
	.swiper-box {
		width: 100%;
		padding: 15px;
		height: 450rpx;

		img {
			width: 100%;
			border-radius: 10px;
		}
	}
</style>
