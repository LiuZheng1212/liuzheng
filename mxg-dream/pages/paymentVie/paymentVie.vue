<template>
	<view class="box">
		<div class="top">
			<p class="pp" @click="$router.go(-1)">&lt;</p>
			<h4>订单支付</h4>
			<p></p>
		</div>
		<ul>
			<li>支付方式</li>
			<view class="uni-form-item uni-column" style="margin:50rpx 90rpx;">
				<radio-group name="radio" class="radio">
					<label>
					<p> <span><img src="../../static/images/zfb.png" alt=""></span> <span class="sp">支付宝</span> 	<span class="a fr"><radio  /></span> <br></p>
					<p class="p"><span><img src="../../static/images/wx.png" alt=""></span> <span class="sp">微信</span>	<span class="a fr"><radio  /></span></p>
					</label>
				</radio-group>
			</view>
		</ul>
		<div class="price">
			<div class="a">
				<p>实付金额</p>
				<p class="prices">￥1</p>
			</div>
			<div class="b">
				<p>优惠价</p>
				<p>￥12</p>
			</div>
		</div>
		<div class="foot">
			<button>立即支付</button>
		</div>
	</view>

</template>

<script>
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import {ref} from 'vue'
	export default {
		setup() {
			
			const route = useRoute()
			console.log(route.query.price);
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	.radio{
		img:nth-child(1){
			position: relative;
			top: 20rpx;
			left: -80rpx;
			width: 45rpx;
			height: 50rpx;
		}
		img:nth-child(1){
			position: relative;
			top: 20rpx;
			left: -80rpx;
			width: 60rpx;
			height: 60rpx;
		}
		.sp{
			position: relative;
			left: -60rpx;
		}
	}
	.a{
		position: relative;
		left: 100rpx;
	}
	.prices{
		color: red;
	}
	.box{
		box-sizing: border-box;
		padding:10rpx 40rpx ;
	}
	.foot{
		width: 100%;
		margin-top: 100rpx;
		box-sizing: border-box;
		// padding: 0 20rpx;
		button{
			background-color: #345dc2;
			border-radius: 30px;
			color: white;
			
		}
	}
	*{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.price{
		box-sizing: border-box;
		padding: 20rpx 40rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		border: 1px solid #ccc;
		border-radius: 10px;
		margin-top: 30rpx;
	}
	.fr{
		float: right;
	}
	.top {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;

		.pp {
			margin-left: 12rpx;
		}
	}
	ul{
		border: 1px solid #ccc;
		margin-top: 80rpx;
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		border-radius: 10px;
		li{
			box-sizing: border-box;
			border-bottom: 1px solid #ccc;
			padding: 20rpx 0;
		}
		.p{
			margin-top: 30rpx;
		}
	}
</style>
