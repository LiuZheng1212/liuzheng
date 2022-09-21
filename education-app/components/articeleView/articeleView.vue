<template>
	<view>
		<view class="article-item">
			<view class="left">
				<view class="fir-text">
					广播二UFO和我发hi五年分配你是姜文尼斯撒
				</view>
				<view class="sec-text">
					hi哦恩福洪呢拍摄风景哦怕呢破伤风
				</view>
				<view class="bottom-text">
					<view class="name">
						吕秀兰 ·
					</view>
					<view class="">
						1979年07月12日 · 4657赞
					</view>

				</view>
			</view>
			<view class="right">
				<image
					src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftu1.whhost.net%2Fuploads%2F20181202%2F23%2F1543765141-AJnawTFNGK.jpg&refer=http%3A%2F%2Ftu1.whhost.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666168901&t=426976938b66882fcdd7b20e6b8ea0ce"
					mode=""></image>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "articleView",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.article-item {
		width: 100%;
		display: flex;
		border-bottom: 1px solid #eee;
		padding: 3%;
		box-sizing: border-box;

		.left {
			width: 70%;

			.fir-text {
				font-weight: 700;

			}

			.sec-text {
				font-size: 25rpx;
				color: #7e7e7e;
				margin: 2% 0 4% 0;
			}

			.bottom-text {
				width: 100%;
				display: flex;
				font-size: 25rpx;
				color: #7e7e7e;

				.name {
					color: black;
				}
			}
		}

		.right {
			flex: 1;
			margin-left: 2%;

			image {
				width: 100%;
				height: 80%;
				border-radius: 6%;

			}
		}
	}
</style>
