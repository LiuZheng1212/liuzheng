<template>
	<view>
		<view class="box">
			<!-- 搜索 -->
			<search></search>
			<!-- 分类 -->
			<view class="cate-box">
				<view :class="{'cate-item':true, 'active':item.id==id}" v-for="item in list" :key="item.id" @click="btn(item)">
					{{item.title}}
				</view>
			</view>
		</view>
		
		<!-- 内容 -->
		<view class="ask-box">
			<view class="ask-item" v-for="item,index in alist" :key="index" @click="btns(item)">
				<view class="fir-text">
					{{item.title}}
				</view>
				<view class="sec-text">
					<view class="left">
						{{item.thumhup}}回答 · {{item.viewCount}}浏览
					</view>
					<view class="right">
						{{item.nickName}} · {{item.createDate}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {onPageScroll,onReachBottom} from '@dcloudio/uni-app'
	import {ref,reactive,toRefs} from 'vue'
	import {hots} from '@/api/http/http.js'
	export default {
		setup() {
			const data=reactive({
				list:[
					{
						title:'热门回答',
						id:1,
						ask:'hot'
					},
					{
						title:'最新问题',
						id:12,
						ask:'new'
					},
					{
						title:'等待回答',
						id:123,
						ask:'wait'
					}
				],
				alist:[],
				id:1,
				size:10,
				current:1,
				hots:'hot'
			})
			const btn=(item)=>{
				console.log(item);
				data.id=item.id
				data.hots=item.ask
				hots(item.ask).then(res=>{
					console.log(res);
					data.alist=res.data.records
				})
			}
			// 跳转详情页
			const btns=(item)=>{
				// console.log(item);
				uni.navigateTo({
					url:`/pages/askdetailsView/askdetailsView?id=${item.id}`
				})
			}
			// 上拉加载
			onReachBottom(()=>{
				console.log(data.hots);
				data.current++
				// 请求付费精选
				hots(data.hots,data.current,data.size).then(res=>{
					console.log(res);
					if(data.current==1){
						data.alist=res.data.records
					}else{
						data.alist=[...data.alist,...res.data.records]
					}
					
				});
			})
			hots('hot').then(res=>{
				console.log(res);
				data.alist=res.data.records
			})
			return {
				...toRefs(data),
				btn,
				btns
			}
		}
	}
</script>

<style lang="scss">
	.ask-box{
		width: 100%;
		.ask-item{
			width: 100%;
			border-bottom: 1px solid #eee;
			padding: 4%;
			box-sizing: border-box;
			.fir-text{
				font-weight: 700;
				font-size: 32rpx;
			}
			.sec-text{
				display: flex;
				justify-content: space-between;
				margin: 2% 0;
				color: gray;
				font-size: 24rpx;
			}
		}
	}
	.box{
		position: sticky;
		left: 0;
		top: 0;
		z-index: 22;
	}
	.article-box{
		width: 100%;
		
	}
.cate-box{
	width: 100%;
	height: 80rpx;
	border-bottom: 1px solid #e7e7e7;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #fff;
	border: none;
	.cate-item{
		height: 70rpx;
		line-height: 70rpx;
	}
}
.active{
	border-bottom: 6rpx solid #077dff;
	color: #077dff;
}
</style>
