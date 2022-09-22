<template>
	<view class="category-list">
		<view class="category-item" v-for="item,i in categoryData" :key="i">
			{{item.name}}
		</view><view class="category-item">
			全部分类
		</view>
	</view>
</template>

<script>
export default {
  props:['categoryData'],
  setup () {

    return {
		
    }
  },
}
</script>

<style lang='scss'>
	.category-list {
		width: 100%;
		padding: 0 15px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
		.category-item {
			width: 23%;
			text-align: center;
			padding: 5px 0;
			background-color: #f8f9fb;
			margin-top: 10px;
			border-radius: 5px;
			font-size: 24rpx
		}
	}
</style>
