<template>
	<view>
		<searchInput></searchInput>
		<view class="wrap">
			<u-row gutter="16">
				<u-col span="3.5">
					<scroll-view style="height: calc(100vh - 80rpx);" scroll-y="true">
						<view :class="{'name': true, 'active': data.Index == index}"
							v-for="(item, index) in data.cateList" :key="item.cat_id"
							@click="selectName(index, item.children)">{{ item.cat_name }}</view>
					</scroll-view>
				</u-col>
				<u-col span="9">
					<scroll-view style="height: calc(100vh - 80rpx);" scroll-y="true">
						<view class="" v-for="(item,index) in data.childList" :key="index">
							<view style="text-align: center;margin: 20rpx 0;">/ {{ item.cat_name }} /</view>
							<u-grid :col="3" :border="false">
								<u-grid-item v-for="(child,idx) in item.children" :key="idx">
									<image :src="child.cat_icon" style="width: 100rpx; height: 100rpx;"></image>
									<view class="grid-text">{{ child.cat_name }}</view>
								</u-grid-item>
							</u-grid>
						</view>
					</scroll-view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		reactive
	} from 'vue'
	import * as TS from '@/api/define.ts'
	import {
		getCate
	} from '@/api/api.ts'

	const data: {
		cateList: TS.CateData.message,
		Idx: number,
		childList: TS.CateMessage.children
	} = reactive({
		cateList: [],
		Index: 0,
		childList: []
	})
	getCate().then((res: TS.CateData) => {
		if (res.meta.status == TS.Code.SUCCESS) {
			data.cateList = res.message
			data.childList = res.message[0].children
		}
	})
	// 点击切换高亮
	const selectName = (Idx, child) => {
		data.Index = Idx
		data.childList = child
	}
</script>

<style lang="scss">
	.name {
		height: 90rpx;
		font-size: 30rpx;
		line-height: 90rpx;
		text-align: center;
	}

	.u-col {
		height: calc(100vh - 100rpx);
	}

	.active {
		color: #d75255 !important;
		border-left: 5rpx solid #d75255;
	}
</style>
