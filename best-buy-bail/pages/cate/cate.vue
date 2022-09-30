<template>
	<!-- 顶部导航栏 -->
	<view class="btn-box">
		<u-button class="btn" @click="gosearch">搜索</u-button>
	</view>
	<view class="content">
		<view class="left">
			<scroll-view scroll-y="true" class="content-left" >
				<view :class=" data.activeIndex == item.cat_id ? 'left-item active' : 'left-item'" 
				v-for="item in data.cataList" :key="item.cat_id" @click="changeIndex(item)">
					{{item.cat_name}}
				</view>
			</scroll-view>
		</view>
		<view class="right">
			<scroll-view scroll-y="true" class="content-right">
				<view v-for="item in data.activeList" :key="item.cat_id">
					<view class="title">
						/{{item.cat_name}}/
					</view>
					<u-grid :col="3" :border="false">
						<u-grid-item class="right-item" v-for="obj in item.children" :key="item.cat_id">
							<image class="img" :src="obj.cat_icon" mode=""></image>
							<view class="grid-text">{{obj.cat_name}}</view>
						</u-grid-item>
					</u-grid>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { getCategories } from '@/api/api.ts'
	import { reactive } from 'vue'
	const data = reactive({
		cataList:[],
		activeIndex:1,
		activeList:[]
	})
	const changeIndex = (obj:any)=>{
		data.activeIndex  = obj.cat_id
		data.activeList = obj.children
	}
	const gosearch = ()=>{
		uni.navigateTo({
			url:'/pages/search/search'
		})
	}
	getCategories().then((res:any)=>{
		data.cataList = res.message
		data.activeList = res.message.find((item:any)=>{
				return item.cat_id == 1
		}).children
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
.content{
	display: flex;
	.left{
		width: 200rpx;
		.content-left{
			width: 100%;
			height: calc(100vh - 90rpx);
			.left-item{
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
			}
			.active{
				position: relative;
				color: #eb4450;
			}
			.active::after{
				content: '';
				width: 6rpx;
				height: 70rpx;
				background-color: #eb4450;
				position: absolute;
				top: 5rpx;
				left: 0;
			}
		}
	}
	.right{
		flex: 1;
		.content-right{
			width: 100%;
			height:calc(100vh - 90rpx);
			.title{
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
			}
			.right-item{
				.img{
					width: 90rpx;
					height: 90rpx;
				}
			}
		}
	}
	
}

</style>
