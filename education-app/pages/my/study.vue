<template>
	<view>
		<div class="top">
			<p class="pp" @click="$router.push('/pages/my/my')"></p>
			<h4>我的学习</h4>
			<p></p>
		</div>
		<div class="list">
			<ul>
				<li v-for="item in list" :key="item.id">
					<div class="left">
						<h4>{{item.title}}</h4>
						<view class="progress-box">
							<progress :percent="item.percent" show-info="top" stroke-width="3" />
						</view>
					</div>
					<div class="right">
						<img :src="item.mainImage" alt="">
					</div>
				</li>
			</ul>
		</div>
	</view>
</template>

<script>
	import {
		study
	} from '@/api/login.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				list: []
			})
			study().then(res => {
				data.list = res.data
			})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.list {
		margin-top: 90rpx;

		ul {
			padding-left: 0;
			padding: 10rpx 20rpx;

			li {
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				padding: 10rpx 20rpx;

				.left {
					width: 60%;

					.progress-box {
						margin-top: 40rpx;
						box-sizing: border-box;
						padding: 0 20rpx;
					}
				}

				.right {
					width: 40%;

					img {
						width: 270rpx;
						border-radius: 10px;
						height: 170rpx;
					}
				}
			}
		}
	}

	.top {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		color: #000;
		top: 0;
		left: 0;
		z-index: 9999;

		h4 {
			font-size: 32rpx;
		}

		.pp {
			margin-left: 18rpx;
			position: relative;
		}

		.pp::before {
			content: '';
			position: absolute;
			display: inline-block;
			width: 18rpx;
			height: 18rpx;
			border-left: 2rpx solid #000;
			border-bottom: 2rpx solid #000;
			transform: rotate(45deg);
			left: 15px;
			top: -7px;
		}
	}
</style>
