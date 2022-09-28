<template>
	<view class="body">
		<view class="header">
			<text class="iconfont icon" @click="goreturn"></text>
			<text class="txt">设置</text>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell ">
				<view class="uni-list-cell-db">允许非WIFI网络播放</view>
				<switch checked @change="switch1Change" />
			</view>
			<view class="uni-list-cell ">
				<view class="uni-list-cell-db">允许非WIFI网络缓存</view>
				<switch checked @change="switch1Change" />
			</view>
			<view class="uni-list-cell ">
				<view class="uni-list-cell-db">视频自动连续播放</view>
				<switch checked @change="switch1Change" />
			</view>
		</view>
		<view class="uni-list-cache"  @click="openPop">
			<view class="uni-list-cell-db">清除应用缓存</view>
			<text class="cache-txt">1kB</text>
		</view>
		<view>
			
			
			<!-- <button @click="openPop">打开弹窗</button> -->
			<uni-popup ref="popup" type="center">
				<view class="pop-box">
					<view class="eliminate">
						您确定清除应用缓存吗？
					</view>
					<view class="cache">
						(该操作不会删除缓存课程)
					</view>
					<view class="pop-judge">
						<view class="no" @click="closePop">
							取消
						</view>
						<view class="yes">
							确定
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import {
		ref,
		toRefs,
		reactive
	} from "vue"
	import { useRouter } from 'vue-router'
	export default {
		setup(props, context) {
			const popup = ref(null)
			const router = useRouter()
			const data = reactive({

			});
			
			/* 打开弹框 */
			const openPop = () => {
				popup.value.open()
			}
			/* 关闭弹窗 */
			const closePop = () => {
				popup.value.close()
			}
			/* 按钮开关 */
			const switch1Change = (e) => {
				console.log('switch1 发生 change 事件，携带值为', e.detail.value)
			}
			/* 返回上一页 */
			const goreturn = () => {
				router.push('/pages/my/my')
			}

			return {
				...toRefs(data),
				goreturn,
				switch1Change,
				popup,
				openPop,
				closePop
			}
		}
	}
</script>

<style lang="scss">
	.body {
		width: 100%;
		height: 100%;
		background-color: ghostwhite;
	}

	/* 头部 */
	.header {
		text-align: center;
		height: 40px;
		line-height: 40px;

		.txt {
			font-weight: 800;
		}

		.icon {
			position: relative;
			left: 20px;
			top: 0;
		}
		.icon::before {
			content: '';
			position: absolute;
			display: inline-block;
			width: 20rpx;
			height: 20rpx;
			border-left: 2rpx solid #000;
			border-bottom: 2rpx solid #000;
			transform: rotate(45deg);
			left: -350rpx;
			top: 10rpx;
		}
	}

	.uni-list-cache,
	.uni-list {
		margin-top: 10px;

		.cache-txt {
			color: #bbb;
			font-size: 20px
		}
	}

	.uni-list-cell,
	.uni-list-cache {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		border-bottom: 1px solid #eee;
	}

	.header,
	.uni-list-cell,
	.uni-list-cache {
		background-color: #fff;
	}

	.pop-box {
		width: 250px;
		height: 150px;
		background-color: #fff;
		position: relative;
		text-align: center;
		overflow: hidden;
		border-radius: 5px;

		.eliminate {
			font-weight: 400;
			font-size: 18px;
			margin-top: 20px;
		}

		.cache {
			font-size: 15px;
			color: #999;
			margin-top: 25px;
		}

		.pop-judge {
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			display: flex;
			height: 40px;
			line-height: 40px;
			border-top: 1px solid #ccc;

			.no,
			.yes {
				width: 50%;
				text-align: center;
			}

			.no {
				border-right: 1px solid #ccc;
			}

			.yes {
				color: deepskyblue;
			}
		}
	}
</style>
