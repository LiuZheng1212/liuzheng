<template>
	<view>
		<!-- 搜索区域 -->
		<myInput></myInput>
		
		<view class="title">
			热门搜索
		</view>
		
		<view class="cate-box">
			<view class="cate-item">
				java
			</view>
			<view class="cate-item">
				java
			</view>
			<view class="cate-item">
				java
			</view>
			<view class="cate-item">
				java
			</view>
			<view class="cate-item">
				java
			</view>
			<view class="cate-item">
				java
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
	export default {
		data() {
			return {
				
			};
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
