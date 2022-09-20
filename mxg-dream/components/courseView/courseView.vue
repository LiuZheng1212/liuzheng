<template>
	<view>
		<view class="course-item" v-for="(item,index) in list" :key="index">
			<view class="course-img">
				<image :src="'../..'+item.mainImage" mode=""></image>
				<view class="time">
					{{item.totalTime}}
				</view>
			</view>
			<view class="course-text">
				<view class="first-text">
					{{item.title}}
				</view>
				<view class="teacther-text">
					<image :src="item.userImage" mode=""></image>{{item.nickName}}
				</view>
				<view class="bottom">
					<view class="left">
						<image src="../../static/images/money.png" mode=""></image> {{item.priceOriginal}}
					</view>
					<view class="right">
						<image src="../../static/images/video.png" mode=""></image>{{item.studyTotal}}人在学
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getOk} from "@/utils/home.js"
	import {
		reactive,
		toRefs,
		ref
	} from "vue";
	export default {
		name:"courseView",
		
		setup(props,context) {
			let form=reactive({
				sort:'hot',
				current: 1, 
				size: 8
			})
			let data=reactive({
				list:[]
			})
			getOk(form).then(res=>{
				data.list=res.data.records
				console.log(res.data.records[0]);
			})
			return {...toRefs(data,form)}
		}
	}
</script>

<style lang="scss">
	.time{
		 font-size: 16rpx;
		 text-align: center;
		 color: #fff;
		 width: 112rpx;
		 border-radius: 20rpx;
		 background:rgba(51,51,51,.4);
		 position: relative;
		 top: -46rpx;
		 left: 170rpx;
	}
.course-item{
		width: 100%;
		padding: 2%;
		margin-bottom: 1%;
		height: 240rpx;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid #eee;
		.course-img{
			width: 40%;
			image{
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
		}
		.course-text{
			image {
				width: 30rpx;
				height: 30rpx;
			}
			flex: 1;
			margin-left: 4%;
			.first-text{
				font-weight: 600;
				
			}
			.teacther-text{
				color: #5e5e5e;
				margin-top: 5%;
			}
			.bottom{
				width: 100%;
				display: flex;
				.left{
					color: orangered;
				} 
				.right{
					margin-left: 16%;
				}
			}
		}
	}
</style>