<template>
	<view class="boxs">
		<div class="top">
			<p class="pp" @click="$router.go(-1)">&lt;</p>
			<h4>我的订单</h4>
			<p></p>
		</div>
		<div class="order" v-for="obj,index in list" :key="index">
			<p class="ps">{{obj.updateDate}} <span>订单号:{{obj.orderId}}</span> </p>
			<view class="course-item" v-for="item in obj.courseList" :key="item.id" @click="toDetail(item)">
				<view class="course-img">
					<image :src="item.mainImage" mode=""></image>
					<p class="imgs">{{item.totalTime}}</p>
				</view>
				<view class="course-text">
					<view class="first-text">
						{{item.title}}
					</view>
					<view class="teacther-text">
						<image src="../../static/images/mine.png" mode=""></image> {{item.nickName}}
					</view>
					<view class="bottom">
						<view class="left">
							<image class="img1" src="../../static/images/money.png" mode=""></image>
							{{item.isFree==1?item.priceOriginal:'免费'}}
						</view>
						<view class="right">
							<image class="img2" src="../../static/images/video.png" mode=""></image>
							{{item.studyTotal}}人在学
						</view>
					</view>
				</view>
			</view>
			<div class="payment">
				<div class="buy1" v-if="obj.status==1">
					<p class="sf fr">实付: <span>￥{{obj.priceDiscount}}</span></p>
					<p class="zf">
						<span class="sp">待支付</span>
						<span>
							<button @click="qx">取消订单</button>
							<button @click="payment(obj)">立即支付</button>
						</span>
					</p>
				</div>
				<div class="buy2" v-if="obj.status==2">
					<p class="sf  fr">实付:<span>￥{{obj.priceDiscount}}</span></p>
					<p class="down">交易成功</p>
				</div>
				<div class="buy3" v-if="obj.status==3">
					<p class="sf">实付: <span>￥{{obj.priceDiscount}}</span> </p>
					<p class="pap">
						<span class="gb">交易关闭</span>
						<button @click="del">删除订单</button>
					</p>
				</div>
			</div>
		</div>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog  title="确定取消该订单记录？" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popups" type="dialog">
			<uni-popup-dialog  title="确定要删除该订单记录？" :duration="2000" :before-close="true" @close="closes" @confirm="confirms"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs,
		ref
	} from 'vue'
	import {
		order
	} from '@/api/http/http.js'
	export default {
		setup() {
			const popup=ref(null)
			const popups=ref(null)
			const data = reactive({
				list: []
			})
			order().then(res => {
				console.log(res.data);
				data.list = res.data
			})
			const payment=(item)=>{
				console.log(1);
				console.log(item);
				uni.navigateTo({
					url:`/pages/paymentVie/paymentVie?price=${item.priceDiscount}`
				})
			}
			// 取消弹框
			const qx=()=>{
				popup.value.open()
			}
			const close=()=>{
				popup.value.close()
			}
			// 确定
			const confirm=()=>{
				popup.value.close()
			}
			// 删除订单
			const del=()=>{
				popups.value.open()
			}
			const closes=()=>{
				popups.value.close()
			}
			// 确定
			const confirms=()=>{
				popups.value.close()
			}
			return {
				...toRefs(data),
				payment,
				popup,
				popups,
				qx,
				close,
				confirm,
				closes,
				confirms,
				del
			}
		}
	}
</script>

<style lang="scss">
	.boxs{
		overflow: hidden;
		width: 100%;
	}
	.fr{
		float: right;
	}
	.fl{
		float: left;
	}
	.order{
		width: 100%;
		.ps{
			margin-top: 20rpx;
			box-sizing: border-box;
			padding: 10rpx 20rpx;
			font-size: 26rpx;
			color:#363839;
		}
		.payment{
			width: 100%;
			overflow: hidden;
			.buy1{
				width: 100%;
				.sf{
					padding: 0 25rpx;
					margin-bottom: 20rpx;
					span{
						color: red;
						font-size: 34rpx;
					}
				}
				.zf{
					display: flex;
					justify-content: space-between;
					width: 100%;
					box-sizing: border-box;
					padding: 0 15rpx;
					border-bottom: 1px solid #ccc;
					.sp{
						color: red;
						margin-top: 15rpx;
					}
					button{
						display: inline-block;
						width: 150rpx;
						// height: 40rpx;
						font-size: 24rpx;
						margin-right: 20rpx;
						margin-bottom: 20rpx;
					}
					button:nth-child(2){
						background-color: red;
						color: white;
					}
				}
			}
			.buy2{
				overflow: hidden;
				// margin-bottom: 20rpx;
				border-bottom: 1px solid #ccc;
				.sf{
					float: right;
					padding: 0 30rpx;
					color: red;
					font-size: 34rpx;
				}
				.down{
					margin-top: 40rpx;
					padding: 0 30rpx;
					color: #959da5;
					margin-bottom: 20rpx;
				}
			}
			.buy3{
				overflow: hidden;
				padding: 0 26rpx;
				.sf{
					float: right;
					margin-bottom: 20rpx;
					color: red;
					
				}
				.pap{
					width: 100%;
					display: flex;
					justify-content: space-between;
					margin-bottom: 20rpx;
					margin-top: 40rpx;
					.gb{
						color: #959da5;
						margin-top: 12rpx;
					}
					button{
						display: inline-block;
						position: relative;
						right: -210rpx;
						width: 150rpx;
						font-size: 24rpx;
					}
				}
			}
		}
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

	.img1 {
		position: relative;
		top: 2rpx;
		left: 5rpx;
	}

	.img2 {
		position: relative;
		top: 2rpx;
		left: 2rpx;
	}

	.course-item {
		width: 100%;
		padding: 2%;
		margin-bottom: 3%;
		height: 240rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #eee;

		.course-img {
			position: relative;
			width: 40%;

			image {
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}

			.imgs {
				box-sizing: border-box;
				padding: 2rpx 15rpx;
				border-radius: 50px;
				position: absolute;
				bottom: 10rpx;
				right: 10rpx;
				color: #fff;
				background-color: rgba(0, 0, 0, 0.3);
			}
		}

		.course-text {
			image {
				width: 30rpx;
				height: 30rpx;
			}

			flex: 1;
			margin-left: 4%;

			.first-text {
				font-weight: 600;

			}

			.teacther-text {
				color: #5e5e5e;
				margin-top: 8%;
			}

			.bottom {
				width: 100%;
				display: flex;
				margin-top: 5rpx;
				justify-content: space-between;

				.left {
					color: orangered;

				}

				.right {
					// margin-left: 16%;
					margin-right: 10rpx;

				}
			}
		}
	}
</style>
