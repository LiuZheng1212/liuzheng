<template>
	<view>
		<!-- 搜索框 -->
		<myInput></myInput>
		<view class="list-box">
			<view v-for="(item,index) in list" :key="index">
				{{item.title}}
			</view>
		</view>
		<!-- 综合排序 -->
		<div class="box">
			<div class="left">
				<p align="center" @click="flag1=!flag1">{{list1[0].title}}</p>
			</div>
			<div class="center">
				<p align="center" @click="flag2=!flag2">{{list2[0].title}}</p>
			</div>
			<div class="right">
				<p align="center" @click="flag3=!flag3">{{list3[0].title}}</p>
			</div>
		</div>
		<ul v-show="flag1">
			<li v-for="item,index in list1" :key="index">1</li>
		</ul>
		<ul v-show="flag2">
			<li v-for="item,index in list2" :key="index">{{item.title}}</li>
		</ul>
		<div class="boxs" v-show="flag3">
			<div class="left1">
				<ul >
					<li v-for="item,index in list3" :key="index">{{item.title}}</li>
				</ul>
			</div>
			<div class="right1">
				11
			</div>
		</div>
	</view>
</template>

<script>
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				flag1:false,
				flag2:false,
				flag3:false,
				list: [{
						title: '课程',
						id: '1'
					},
					{
						title: '文章',
						id: '12'
					},
					{
						title: '问答',
						id: '123'
					}
				],
				list1: [{
						title: '综合排序',
						id: 1
					},
					{
						title: '最新排序',
						id: 12
					},
					{
						title: '热门排序',
						id: 123
					}
				],
				list2: [{
						title: '全部课程',
						id: 1
					},
					{
						title: '付费课程',
						id: 12
					},
					{
						title: '免费课程',
						id: 123
					},
				],
				list3: [{
						title: '全部分类'
					},
					{
						title: 'java'
					},
					{
						title: 'javascript'
					},
					{
						title: 'php'
					},
				]
			})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.boxs{
		display: flex;
		.left1 {
			width: 35%;
			ul{
				li{
					width: 100%;
					height: 80rpx;
					line-height: 80rpx;
					text-align: center;
				}
			}
		}
		
		.right1 {
			flex: 1;
		}
	}
	.box {
		display: flex;

		.left {
			flex: 1;
		}

		.center {
			flex: 1;
		}

		.right {
			flex: 1;
		}
	}

	li {
		list-style: none;
	}

	.list-box {
		display: flex;
		justify-content: space-around;
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 10rpx;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		width: 100%;
	}
</style>
