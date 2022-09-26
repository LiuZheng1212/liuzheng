<template>
	<view>
		<!-- 内容 -->
		<view class="ask-box">
			<view class="ask-item" v-for="item in askList" :key="item.id" @click="toAskDetail(item.id)">
				<view class="fir-text">
					{{item.title}}
				</view>
				<view class="sec-text">
					<view class="left">
						{{item.reply}}回答 · {{item.viewCount}}浏览
					</view>
					<view class="right">
						{{item.nickName}} · {{item.updateDate}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { toRefs } from "vue"
	export default {
		name:"askList",
		props:['askList'],
		setup(){
			// 去详情页
			const toAskDetail=(id)=>{
				uni.navigateTo({
					url:`/pages/askDetail/askDetail?id=${id}`
				})
			}
			
			return {
				toAskDetail
			}
		}
	}
</script>

<style lang="scss">
.ask-box {
		width: 100%;

		.ask-item {
			width: 100%;
			border-bottom: 1px solid #eee;
			padding: 4%;
			box-sizing: border-box;

			.fir-text {
				font-weight: 700;
				font-size: 35rpx;
			}

			.sec-text {
				display: flex;
				justify-content: space-between;
				margin: 2% 0;
				color: gray;
			}
		}
	}

</style>