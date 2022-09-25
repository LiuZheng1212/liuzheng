<template>
	<view>
		<!-- 阅读 -->
		<view class="box">
			<!-- 搜索 -->
			<search></search>
			<!-- 分类 -->
			<scroll-view scroll-x="true">
				<view class="cate-box">
					<view :class="{'cate-item':true, 'active':null==ids}" @click="btn(null)">
						推荐
					</view>
					<view :class="{'cate-item':true, 'active':item.id==ids}" v-for="item in list" :key="item.id"
						@click="btn(item.id)">
						{{item.name}}
					</view>

				</view>
			</scroll-view>
		</view>

		<!-- 内容 -->
		<view class="article-box">
			<articleView :readList="readList"></articleView>
		</view>
	</view>
</template>

<script>
	import {
		onPageScroll,
		onReachBottom
	} from '@dcloudio/uni-app'
	import {
		list,
		read
	} from '@/api/http/http.js'
	import {
		ref,
		toRefs,
		reactive
	} from 'vue'
	export default {
		setup() {
			// 分类数据
			const data = reactive({
				list: [], //分类数据
				ids: null,
				readList: [],
				current:1,
				szie:10
			})
			// 请求数据
			list().then(res => {
				// console.log(res);
				data.list = res.data
			});
			// 请求阅读推荐
			read(data.ids).then(res => {
				console.log(res);
				data.readList = res.data.records
			})
			// 高亮
			const btn = (id) => {
				console.log(id);
				data.ids = id
				read(id).then(res => {
					console.log(res);
					data.readList = res.data.records
				})
			}
			// 上拉加载
			onReachBottom(() => {
				data.current++
				// 精选
				read(data.current, data.size,data.ids).then(res => {
					data.readList = [...data.readList, ...res.data.records]
				});
			})
			return {
				...toRefs(data),
				btn
			}
		}
	}
</script>

<style lang="scss">
	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		color: transparent;
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
		// width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #e7e7e7;
		display: flex;
		padding: 0 30rpx;
		background-color: #fff;
		border: none;

		.cate-item {
			// padding-left: 20rpx;
			margin-right: 100rpx;
			white-space: nowrap;
			height: 70rpx;
			line-height: 70rpx;
		}
	}

	.active {
		border-bottom: 6rpx solid #077dff;
		color: #077dff;
	}
</style>
