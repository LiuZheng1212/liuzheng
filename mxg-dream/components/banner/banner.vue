<template>
	<view>
		<swiper @change="swiperItem" :indicator-dots="true" :autoplay="true" indicator-active-color="#fff" indicator-color="#ccc"
			:interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerList" :key="item.id"
			@click="toDetail(item)"
			 :style="`background-image: linear-gradient(${item.background}, #fff);`">
					<image :src="'../..'+item.imageUrl" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:['bannerList'],
		setup(props, ctx) {
			const swiperItem = (e) => {
				ctx.emit('swiperItem', props.bannerList[e.detail.current].background)
			}
			const toDetail=(item)=>{
				console.log(item);
				uni.navigateTo({
					url:`/pages/detailsView/detailsView?id=${item.id}`
				})
			}
			return {
				swiperItem,
				toDetail
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		width: 100%;
		height: 350rpx;
	}

	.swiper-item {

		height: 100%;
		background-image: linear-gradient(to bottom, #45328c, #ddd9ea);
		border: none;

	}

	image {
		width: 90%;
		margin-left: 5%;
		height: 297rpx;
		border-radius: 15rpx;
	}
</style>
