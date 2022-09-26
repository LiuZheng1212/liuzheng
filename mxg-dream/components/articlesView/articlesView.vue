<template>
	<view>
		<view class="article-item" v-for="item in articleList" :key="item.id" @click="toDetail(item.id)">
			<view class="left">
				<view class="fir-text">
					{{item.title}}
				</view>
				<view class="sec-text">
					{{item.summary}}
				</view>
				<view class="bottom-text">
					<view class="name">
						{{item.nickName}} · 
					</view>
					<view class="">
						  {{item.updateDate}} · {{item.thumhup}}赞
					</view>
					
				</view>
			</view>
			<view class="right">
				<image :src="item.imageUrl" mode=""></image>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"articleView",
		props:['articleList'],
		setup(){
			const toDetail=(id)=>{
				console.log(id);
				uni.navigateTo({
					url:`/pages/articleDetail/articleDetail?id=${id}`
				})
			}
			return {
				toDetail
			}
		}
	}
</script>

<style lang="scss">
.article-item{
			width: 100%;
			display: flex;
			border-bottom: 1px solid #eee;
			padding: 3%;
			box-sizing: border-box;
			.left{
				width: 70%;
				.fir-text{
					font-weight: 750;
					font-size: 34rpx
				}
				.sec-text{
					font-size: 25rpx;
					color: #7e7e7e;
					margin: 2% 0 8% 0;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				.bottom-text{
					width: 100%;
					display: flex;
					font-size: 25rpx;
					color: #7e7e7e;

					.name{
						color: black;
					}
				}
			}
			.right{
				flex: 1;
				margin-left: 2%;
				image{
					width: 100%;
					height: 80%;
					border-radius: 6%;
					
				}
			}
		}
</style>