<template>
	<view>
		<view class="article-item" v-for="item in readList" :key="item.id" @click="btn(item)">
			<view class="left">
				<view class="fir-text">
					{{item.title}}
				</view>
				<view class="sec-text">
					{{item.summary}}
				</view>
				<view class="bottom-text">
					<view class="name">
						{{item.nickName}} 
					</view>
					<view class="">
						 {{item.updateDate}} · {{item.viewCount}}赞
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
		props:['readList'],
		setup() {
			const btn=(item)=>{
				uni.navigateTo({
					url:`/pages/readmoreView/readmoreView?id=${item.id}
					`
				})
			}
			return {
				btn
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
					font-size: 30rpx;
					font-weight: 700;
					
				}
				.sec-text{
					font-size: 25rpx;
					color: #7e7e7e;
					margin: 2% 0 4% 0;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.bottom-text{
					width: 100%;
					display: flex;
					font-size: 22rpx;
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