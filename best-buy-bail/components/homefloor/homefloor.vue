<template>
	<view class="top">
		<image :src="prop.data.floor_title.image_src" mode="widthFix"></image>
	</view>
	<view class="content" >
		<view class="content-item" v-for="item,index in prop.data.product_list" :key="index">
			<image :src="item.image_src"></image>
			
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {defineProps,defineEmits} from 'vue'
	
	const prop = defineProps({
		data:Object
	})
</script>

<style lang='scss'>
.content{
	display: grid;
	grid-row-gap: 10rpx;
	grid-column-gap: 10rpx;
	grid-template-columns: 230rpx 230rpx 230rpx;
	grid-template-rows:  200rpx 200rpx;
	grid-template: 
	"a1 a2 a3" 
	"a1 a4 a5";
	
	.content-item:nth-child(1){
		grid-area: a1;
		image{
			width: 230rpx;
			height: 442rpx;
		}
	}
	.content-item:nth-child(2){
		grid-area: a2;
		image{
			width: 230rpx;
			height: 208rpx;
		}
	}
	.content-item:nth-child(3){
		grid-area: a3;
		image{
			width: 230rpx;
			height: 208rpx;
		}
	}
	.content-item:nth-child(4){
		grid-area: a4;
		image{
			width: 230rpx;
			height: 208rpx;
		}
	}
	.content-item:nth-child(5){
		grid-area: a5;
		image{
			width: 230rpx;
			height: 208rpx;
		}
	}
}
</style>
