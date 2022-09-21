<template>
	<view>
		<view class="box">
			<view class="header">
				<!-- 搜索 -->
				<searchCom></searchCom>
			</view>
			<!-- 分类 -->
			<view class="cate-box">
				<view class="cate-item active">
					热门回答
				</view>
				<view class="cate-item">
					最新问题
				</view>
				<view class="cate-item">
					等待回答
				</view>
			</view>
		</view>

		<!-- 内容 -->
		<view class="ask-box">
			<view class="ask-item">
				<view class="fir-text">
					不是怕平顶山神佛睡觉哦安居房泼妇
				</view>
				<view class="sec-text">
					<view class="left">
						7回答 · 245浏览
					</view>
					<view class="right">
						吕布是 · 2005年05月21日
					</view>
				</view>
			</view>
			<view class="ask-item">
				<view class="fir-text">
					不是怕平顶山神佛睡觉哦安居房泼妇
				</view>
				<view class="sec-text">
					<view class="left">
						7回答 · 245浏览
					</view>
					<view class="right">
						吕布是 · 2005年05月21日
					</view>
				</view>
			</view>
			<view class="ask-item">
				<view class="fir-text">
					不是怕平顶山神佛睡觉哦安居房泼妇
				</view>
				<view class="sec-text">
					<view class="left">
						7回答 · 245浏览
					</view>
					<view class="right">
						吕布是 · 2005年05月21日
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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

	.box {
		position: sticky;
		left: 0;
		top: 0;
		z-index: 22;
	}

	.article-box {
		width: 100%;

	}

	.cate-box {
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #e7e7e7;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		border: none;

		.cate-item {
			height: 70rpx;
			line-height: 70rpx;
		}
	}

	.active {
		border-bottom: 6rpx solid #077dff;
		color: #077dff;
	}

	.header {
		width: 100%;
		padding: 15rpx;
		background-color: #0072b7;
		position: sticky;
		top: 0;
		z-index: 1;
	}
</style>
