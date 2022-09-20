<template>
	<view>
		<view class="swiper">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#ccc"
				indicator-active-color="#fff" @change="bac">
				<swiper-item v-for="(item,index) in bannerList" :key="index"
					:style="`background-image: linear-gradient(${item.background}, #fff);`">
					<image :src="'../..'+item.imageUrl" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {
		getBanner
	} from "@/utils/home.js";
	import {
		reactive,
		toRefs,
		ref
	} from "vue";
	export default {
		setup(props, context) {
			console.log(props);
			const data = reactive({
				bannerList: [], //存放轮播图的数据
			});
			getBanner().then(res => {
				data.bannerList = res.data;
			})
			let str=ref('#006C00')
			const bac=(a)=>{
				setTimeout(() => {
				      if(a.detail.current==0){
				      	str.value='#006C00'
				      	context.emit('a',str.value)
				      }
				      if(a.detail.current==1){
				      	str.value='#45328c'
				      	context.emit('a',str.value)
				      }
				      if(a.detail.current==2){
				      	str.value='#0072B7'
				      	context.emit('a',str.value)
				      }
				    }, 300);
				
			}
			return {
				...toRefs(data),
				bac,
				str
			};
		}
	}
</script>

<style lang="scss">
	.swiper {
			width: 100%;
			swiper {
				// padding-top: 90rpx;
				width: 100%;
				margin: 0 auto;
				height: 350rpx;
				display: flex;
				// padding-top: 80rpx;
				image {
					// margin-top: 90rpx;
					margin-top: 6%;
					margin-left: 5%;
					width: 90%;
					height: 94%;
					border-radius: 20rpx;
				}
			}
		}
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
</style>
