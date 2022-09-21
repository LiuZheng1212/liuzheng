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
					推荐
				</view>
				<view class="cate-item">
					Java
				</view>
				<view class="cate-item">
					前端
				</view>
				<view class="cate-item">
					云计算
				</view>
				<view class="cate-item">
					运维
				</view>
			</view>
		</view>

		<!-- 内容 -->
		<view class="article-box">
			<articeleView></articeleView>
			<articeleView></articeleView>
			<articeleView></articeleView>
			<articeleView></articeleView>
			<articeleView></articeleView>
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
