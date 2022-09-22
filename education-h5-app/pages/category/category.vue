<template>
	<view class="category">
		<!-- 左侧菜单栏 -->
		<scroll-view scroll-y="true" class="category-aside">
			<view :class="{'aside-item':true,'active':asideId == item.id}" v-for="item in categoryList" :key="item.id"
				@click="changCategory(item)">
				{{item.name}}
			</view>
		</scroll-view>

		<!-- 右侧内容 -->
		<view class="category-cnt">
			<div class="cnt-tag">
				<div class="tag" v-for="item in tagList" :key="item.id">{{item.name}}</div>
			</div>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		toRefs
	} from 'vue'
	import {
		getHotrecom
	} from '../../api/api.js'

	const data = reactive({
		// 分类数据
		categoryList: [],
		// 侧边栏高亮id
		asideId: 1,
		// 侧边栏对应的标签
		tagList: []
	})

	// 请求分类列表
	getHotrecom().then(res => {
		data.categoryList = res.data.data
		data.tagList = data.categoryList[0].labelList
	})

	// 切换侧边栏
	const changCategory = (obj) => {
		data.asideId = obj.id
		data.tagList = obj.labelList
	}

	const {
		categoryList,
		asideId,
		tagList
	} = toRefs(data)
</script>

<style lang="scss">
	.active {
		color: #345dc2 !important;
		font-size: 16px;
		font-weight: 700
	}

	.active:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 0;
		height: 40rpx;
		border-right: 3px solid #345dc2;
		transform: translateY(-50%);
		border-radius: 15px;
	}

	.category {
		width: 100%;
		display: flex;

		.category-aside {
			width: 25%;
			height: calc(100vh - 60px);
			background-color: #f8f9fb;
			padding-bottom: 80rpx;

			.aside-item {
				position: relative;
				width: 100%;
				height: 150rpx;
				font-size: 15px;
				color: #888;
				text-align: center;
				line-height: 150rpx;
			}
		}

		.category-cnt {
			flex: 1;

			.cnt-tag {
				width: 100%;
				padding: 10px;
				display: flex;
				flex-wrap: wrap;

				.tag {
					width: 80px;
					font-size: 12px;
					line-height: 30px;
					border: 1px solid #999;
					border-radius: 15px;
					min-width: 80px;
					text-align: center;
					padding: 0 2px;
					margin: 7px 2px;
				}
			}
		}
	}
</style>
