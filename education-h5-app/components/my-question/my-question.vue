<template>
	<!-- 问答列表 -->
	<div class="querstion-cnt">
		<div class="cnt-item" v-for="item in replyList" :key="item.id">
			<div class="title text-ellipsis">
				{{item.title}}
			</div>
			<div class="info">
				<div class="left">
					{{item.reply}} 回答 · {{item.thumhup}} 浏览
				</div>
				<div class="right">
					{{item.nickName}} · {{timer(+new Date(item.updateDate))}}
				</div>
			</div>
		</div>
	</div>

	<!-- 底部消息提示 -->
	<view class="foot" v-show="flag == 1">
		-- 已经拉到最下面了惹 --
	</view>
</template>

<script>
	import {
		timer
	} from '../../utils/time.js'
	export default {
		props: ['replyList', 'flag'],
		setup() {

			return {
				timer
			}
		},
	}
</script>

<style lang='scss'>
	.foot {
		width: 100%;
		text-align: center;
		margin-top: 20rpx;
		padding-bottom: 140rpx;
	}

	.querstion-cnt {
		width: 100%;
		margin-top: 40px;
		border-bottom: 0.5px solid #f1f1f1;

		.cnt-item {
			width: 100%;
			padding: 15px;
			box-sizing: border-box;

			.title {
				font-size: 16px;
				font-weight: 700;
			}

			.info {
				width: 100%;
				display: flex;
				justify-content: space-between;
				font-size: 13px;
				color: #999;
				margin-top: 4px;
			}
		}
	}
</style>
