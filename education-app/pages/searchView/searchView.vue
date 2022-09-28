<template>
	<view>
		<!-- 搜索区域 -->
		<myInput v-model="searchVal" @searchOk="searchOk"></myInput>
		
		<view class="title">
			热门搜索
		</view>
		
		<view class="cate-box">
			<view class="cate-item" v-for="item in list" :key="item.id" @click="toContent(item.name, item.id)">
				{{ item.name }}
			</view>
		</view>
		
		<view class="history">
			<view>
				历史搜索
			</view>
			<view class="clear">
				清空
			</view>
		</view>
		<view class="bottom">
			<view class="cate-item">
				java
			</view>
		</view>
	</view>
</template>

<script>
	import { reactive, toRefs } from 'vue'
	import { useRouter } from 'vue-router'
	export default {
		setup() {
			
			const router = useRouter()
			
			const data = reactive({
				list: [
					{
						name: 'java',
						id: 1
					},{
						name: 'python',
						id: 2
					},{
						name: 'Vue.js',
						id: 3
					},{
						name: 'React',
						id: 4
					},{
						name: 'SpringBoot',
						id: 5
					},{
						name: 'SpringCloud',
						id: 6
					},
				],
				searchVal: ''
			})
			
			const toContent = (name,id) => {
				router.push(`/pages/content/content?name=${name}&id=${id}`)
			}
			
			const searchOk = () => {
				data.searchVal = ''
				router.push(`/pages/content/content`)
			}
			
			return {
				...toRefs(data),
				toContent,
				searchOk
			}
		}
	}
</script>

<style lang="scss">
	.history{
		display: flex;
		justify-content: space-between;
		.clear{
			color: #bbb;
		}
	}
.title,.history,.bottom{
	width: 100%;
	padding: 2% 3%;
	box-sizing: border-box;
	font-size: 35rpx
}
.cate-box{
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	padding: 3%;
	box-sizing: border-box;

}
	.cate-item{
		display: inline-block;
		margin: 5px;
		padding: 3px 12px;
		font-size: 10px;
		text-align: center;
		border: 1px solid #aaa;
		color: #aaa;
		border-radius: 10rpx;
	}
</style>
