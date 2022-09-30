<template>
	<view class="box">
		<view class="top-box">
			<u-input v-model="data.searchVal"
			class="ipt"
			placeholder="请输入你想要搜索的内容"
			placeholder-style="color:#aaa;"
			:focus="true" :border="true"
			@blur="getSearch"
			 />
			 <u-button v-show="data.searchVal != 0" @click="clear">取消</u-button>
		</view>
		<view class="content">
			<view class="item" v-for="item in data.searchList" :key="item.cat_id" @click="godetail(item)">
				{{item.goods_name}}
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import {getSearchVal} from '@/api/api'
const data = reactive({
	searchVal:'',
	searchList:[]
})
const clear = ()=>{
	data.searchVal = ''
	data.searchList = []
}
const godetail = (obj:any)=>{
	uni.navigateTo({
		url:`/pages/detail/detail?id=${obj.goods_id}`
	})
}


let t:null = null
const getSearch = () =>{
	if(data.searchVal == ''){
		return false
	}
	clearTimeout(t)
	t = setTimeout(()=>{
		getSearchVal(data.searchVal).then((res:any)=>{
			data.searchList = res.message
		})
	},1000)
	
}
</script>

<style lang="scss" scoped>
.box{
	background-color: #eee;
	height: 100vh;
	padding: 20rpx 20rpx 0;
	.top-box{
		display: flex;
		.ipt{
		margin-right: 10rpx;
		background-color: #fff;
		}
	}
}
.content{
	background-color: #fff;
	margin-right: 10rpx;
	margin-top: 20rpx;
	.item{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 20px;
		border-bottom: 1px dashed #aaa;
	}
}
</style>
