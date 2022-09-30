<template>
		<view >
			<view class="banner">
				<u-swiper :list="data.goodsItem.pics" height="680" name="pics_mid_url"></u-swiper>
			</view>
			<view class="price">
				￥{{data.goodsItem.goods_price}}
			</view>
			<view class="Goodsname">
				<view class="name">
					{{data.goodsItem.goods_name}}
				</view>
				<view class="like">
					<view><u-icon name="star"></u-icon></view>
					<view>
						收藏
					</view>
				</view>
			</view>
			<u-parse :html="data.goodsItem.goods_introduce"></u-parse>
			<u-grid :col="5">
					<u-grid-item>
						<u-icon name="photo" :size="46"></u-icon>
						<view class="grid-text">图片</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="lock" :size="46"></u-icon>
						<view class="grid-text">锁头</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="hourglass" :size="46"></u-icon>
						<view class="grid-text">沙漏</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="hourglass" :size="46"></u-icon>
						<view class="grid-text">沙漏</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="hourglass" :size="46"></u-icon>
						<view class="grid-text">沙漏</view>
					</u-grid-item>
				</u-grid>
		</view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import {getGoodsDetail} from '@/api/api'
 const data = reactive({
	 goodsItem:{},
	 
 })
	onLoad((opt)=>{
			getGoodsDetail(opt.id).then((res:any)=>{
				console.log(res);
				data.goodsItem =res.message
			})
	})

</script>

<style lang="scss" scoped>
.price{
	height: 70rpx;
	line-height: 70rpx;
	padding: 0 20rpx;
	color: #eb4450;
	font-weight: 700;
}
.Goodsname{
	display: flex;
	padding: 0 5rpx ;
	margin-bottom: 20rpx;
	.like{
		width: 160rpx;
		text-align: center;
		border-left: 1px solid #000;
	}
}
</style>
