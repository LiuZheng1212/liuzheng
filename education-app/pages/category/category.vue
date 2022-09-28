<template>
	<view>
		<view class="header">
			<text>分类</text>
			<image src="../../static/images/search1.png" mode=""></image>
		</view>
		<view class="cate-box">
			<scroll-view scroll-y="true" class="left" :show-scrollbar="false">
				<view v-for="(item,index) in listData" :key="item.id" @click="selectItem(item, index)">
					<view :class="{'left-item':true, 'active': Idx == index}">
						{{ item.name }}
					</view>
				</view>
			</scroll-view>


			<view class="right">
				<view class="right-box">
					<view class="right-item" v-for="(child,index) in list" :key="index" @click="toContent(child.name,child.id)">
						{{ child.name }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		list
	} from '../../api/index.js'
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	import { useRouter } from 'vue-router'
	export default {
		setup() {
			
			const router = useRouter()
			
			const data = reactive({
				listData: [],
				list: [],
				Idx: 0
			})
			// 分类
			list().then(res => {
				// console.log(res);
				data.listData = res.data
				data.list = res.data[0].labelList
			})
			// tab栏切换
			const selectItem = (item,index) => {
				data.Idx = index
				data.list = item.labelList
			}

			const toContent = (name, id) => {
				router.push(`/pages/content/content?name=${name}&id=${id}`)
			}
			
			return {
				...toRefs(data),
				selectItem,
				toContent
			}
		}
	}
</script>

<style lang="scss">
	.header {
		height: 100rpx;
		background-color: #345dc2;
		color: white;
		font-size: 35rpx;
		line-height: 100rpx;
		text-align: center;
		font-weight: 600;
		position: relative;

		image {
			position: absolute;
			right: 10rpx;
			top: 23rpx;
			width: 55rpx;
			height: 50rpx;
		}
	}

	.active {
		color: #345dc2 !important;
	}

	.active::before {
		content: "";
		position: absolute;
		width: 6rpx;
		height: 50rpx;
		background-color: #345dc2;
		left: 0;
		top: 35%;
	}

	.cate-box {
		width: 100%;
		display: flex;

		.left {
			width: 26%;
			text-align: center;
			height: calc(100vh - 100rpx);
			background-color: #f8f9fb;

			.left-item {
				height: 140rpx;
				line-height: 140rpx;
				font-size: 30rpx;
				font-weight: 400;
				position: relative;
				color: #8c8c8c;
			}
		}

		.right {
			flex: 1;

			.right-box {
				width: 100%;
				padding: 5% 1%;

				.right-item {
					display: inline-block;
					width: 78px;
					text-align: center;
					height: 31px;
					line-height: 31px;
					border-radius: 30rpx;
					border: 1px solid #bbb;
					margin: 10rpx;
					font-size: 23rpx;
				}
			}
		}
	}
</style>
