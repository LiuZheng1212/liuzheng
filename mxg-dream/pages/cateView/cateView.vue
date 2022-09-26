<template>
	<view>
		<div class="top">
			<p></p>
			<p>分类</p>
			<p @click="$router.push('/pages/searchView/searchView')">
				<img src="../../static/images/sb.png" alt="">
			</p>
		</div>
		<view class="cate-box">
			<scroll-view scroll-y="true" class="left" :show-scrollbar="false">
				<view >
					<view :class="{'left-item':true,active:item.id==ids}"
					v-for="item in list"
					:key="item.id"
					@click="btn(item)"
					>
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			
			
			<view class="right">
				<view class="right-box">
					<view class="right-item" v-for="obj in arrList" :key="obj.id" @click="toCateDetail(obj.id)">
						{{obj.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {ref,reactive,toRefs} from 'vue'
	import {list} from '@/api/http/http.js'
	export default {
		setup() {
			const data=reactive({
				list:[],//分类
				arrList:[],//数据
				ids:'1'
			})
			// 点击高亮
			const btn=(item)=>{
				console.log(item);
				data.arrList=item.labelList
				data.ids=item.id
			}
			// 分类数据
			list().then(res=>{
				console.log(res);
				data.list=res.data
				data.arrList=res.data[data.ids-1].labelList
			});
			const toCateDetail=(id)=>{
				console.log(1);
				console.log(id);
				uni.navigateTo({
					url:`/pages/contentView/contentView?id=${id}`
				})
			}
			return {
				...toRefs(data),
				btn,
				toCateDetail
			}
		}
	}
</script>

<style lang="scss">
	.top{
		width: 100%;
		height: 80rpx;
		background-color: #345dc2;
		align-items: center;
		display: flex;
		justify-content: space-between;
		font-weight: 700;
		color: #fff;
		img{
			width: 40rpx;
			height: 40rpx;
			font-weight: 900;
			margin-top: 5rpx;
			margin-right: 15rpx;
		}
		
	}
	.active{
		color: #345dc2 !important;
		font-weight: 900;
		// border-left: 1px solid #345dc2;
		
	}
	.active::before{
		content: "";
		position: absolute;
		width: 6rpx;
		height: 50rpx;
		background-color: #345dc2;
		left: 0;
		top: 35%;
	}
.cate-box{
	width: 100%;
	display: flex;
	.left{
		width: 30%;
		text-align: center;
		height: calc(100vh - 100rpx);
		background-color: #f8f9fb;
		.left-item{
			height: 140rpx;
			line-height: 140rpx;
			font-size: 30rpx;
			font-weight: 400;
			position: relative;
			color: #8c8c8c;
		}
	}
	.right{
		flex: 1;
		.right-box{
			width: 100%;
			padding: 5%;
			.right-item{
				display: inline-block;
				height: 64rpx;
				line-height: 64rpx;
				padding: 0 2%;
				border-radius: 30rpx;
				border: 1px solid #bbb;
				margin: 2%;
				color: #33352d;
			}
		}
	}
}
</style>
