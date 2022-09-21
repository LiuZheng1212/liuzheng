<template>
	<view>
		<view class="top-pic">
			<image src="../../static/images/banner1.jpg" mode=""></image>
			<span></span>
		</view>
		<view class="content-text">
			<view class="fir-text">
				<view class="left">
					￥456.87
				</view>
				<view class="center">
					<s>￥717.46</s>
				</view>
				<view class="last">
					优惠价
				</view>
			</view>
			<view class="center-text">
				和视频高配三坡贡培给警方破耳机
			</view>
			<view class="last-text">
				<view class="left">
					100%好评
				</view>
				<view class="right">
					152人在学
				</view>
			</view>
		</view>
		
		<!-- tab导航栏 -->
		<view class="tab-box">
			<view :class="{'tab-item':true,active:currentId==item.id}" v-for="item in tabList" :key="item.id" @click="changeTab(item.id)">
				{{item.title}}
			</view>
		</view>
		<view class="tab-content">
			<view class="fir-tab" v-show="currentId==0">
				<image src="../../static/images/banner3.jpg" mode=""></image>
				<image src="../../static/images/banner2.jpg" mode=""></image>
			</view>
			<view class="sec-tab" v-show="currentId==1">
				章节内容
			</view>
			<view class="thr-tab" v-show="currentId==2">
				评论内容
			</view>
			<view class="last-tab" v-show="currentId==3">
				套餐内容
			</view>
		</view>
				
		<!-- 购买 -->
		<div class="bottom-box">
			<button class="buy-btn">立即购买</button>
		</div>
	</view>
</template>

<script>
import { reactive, toRefs } from "vue"
	export default {
		setup(){
			const data=reactive({
				tabList:[
					{
						title:'详情',
						id:0
					},
					{
						title:'章节',
						id:1
					},
					{
						title:'评论',
						id:2
					},
					{
						title:'套餐',
						id:3
					}
				],
				currentId:0
			})
			// 切换导航栏
			const changeTab=(id)=>{
				data.currentId=id
				// console.log(id);
			}
			return {
				...toRefs(data),
				changeTab
			}
		}
	}
</script>

<style lang="scss">
	// 购买
	.bottom-box{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 4;
		.buy-btn{
			border: none;
			height: 80rpx;
			line-height: 80rpx;
			width: 94%;
			background-color: #345dc2;
			color: #fff;
			border-radius: 50rpx;
			
		}
	}
	
	// 导航栏内容
	.tab-content{
		width: 100%;
		.fir-tab,.sec-tab,.thr-tab,.last-tab{
			width: 100%;
			image{
				width: 100%;
				display: block;
			}
		}
	}
	// 导航栏
	.tab-box{
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #eee;
		.tab-item{
			height: 60rpx;
			line-height: 60rpx;
		}
		.active{
			border-bottom: 4rpx solid #007aff;
			color: #007aff;
		}
	}
	// 文字部分
	.content-text{
		width: 100%;
		padding: 3%;
		border-bottom: 30rpx solid #f8f9fb;
		.fir-text{
			width: 100%;
			display: flex;
			align-items: center;
			.left{
				color: red;
				font-weight: 600;
				font-size: 45rpx;
			}
			.center{
				color: #999999;
				margin: 0 2%;
			}
			.last{
				width: 80rpx;
				height: 30rpx;
				border: 1px solid red;
				color: red;
				text-align: center;
				border-radius: 10rpx;
				line-height: 30rpx;
				font-size: 20rpx;
			}
		}
		.center-text{
			font-weight: 600;
			font-size: 36rpx;
		}
		.last-text{
			width: 100%;
			display: flex;
			margin: 2% 0;
			color: #8d8d8d;
			.left,.right{
				width: 200rpx;
				height: 70rpx;
				text-align: center;
				line-height: 70rpx;
				border-radius: 40rpx;
				background-color: #f8f9fb;
			}
			.left{
				margin-right: 3%;
			}
		}
	}
.top-pic{
	width: 100%;
	position: relative;
	span{
		position: absolute;
		width: 64rpx;
		height: 64rpx;
		background-color: rgba(0, 0, 0, 0.5);
		top: 2%;
		left: 2%;
		border-radius: 50%;
	}
	span::before{
		content: "";
		width: 23rpx;
		height: 23rpx;
		border-left: 4rpx solid #fff;
		border-bottom: 4rpx solid #fff;
		position: absolute;
		top: 25%;
		left: 40%;
		transform: rotate(45deg);
	}
	image{
		width: 100%;
	}
}
</style>
