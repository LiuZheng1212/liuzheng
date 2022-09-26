<template>
	<view class="box">
		<div class="top">
			<p class="pp" @click="$router.go(-1)">&lt;</p>
			<h4>确认订单</h4>
			<p></p>
		</div>
		<div class="p4">
			<p style="margin-left: 20rpx;">商品信息</p>
			<div class="box4">
				<!-- <h3>{{item1.title}}</h3> -->
				<view class="course-item" v-for="item in group.list" @click="btns(item1)" :key="item.id">
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
			</div>
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
			<div>
				<p>商品金额</p>
				<p class="prices">￥{{group.totalPrice}}</p>
			</div>
			<div>
				<p>优惠价</p>
				<p>￥{{group.groupPrice}}</p>
			</div>
		</div>
		<div class="foot">
			<div class="z">
				<p>实付金额: <span style="color: red;">{{group.groupPrice}}</span></p>
			</div>
			<div class="y">
				<button>立即支付</button>
			</div>
		</div>
	</view>
</template>

<script>
	import {
		useRoute
	} from 'vue-router'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const route = useRoute()
			const data = reactive({
				group: []
			})
			data.group = JSON.parse(route.query.item)
			console.log(data.group);
			console.log(JSON.parse(route.query.item));
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.foot{
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		width: 100%;
		height: 80rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10rpx;
		.y{
			button{
				background-color: #345dc2;
				color: #fff;
				border-radius: 30px;
				padding: 0rpx 30rpx;
			}
		}
	}
	.price{
		box-sizing: border-box;
		padding: 20rpx 40rpx;
		width: 100%;
		
		border: 1px solid #ccc;
		border-radius: 10px;
		margin-top: 30rpx;
		div{
			display: flex;
			justify-content: space-between;
		}
	}
	.box{
		box-sizing: border-box;
		padding:10rpx 40rpx ;
	}
	*{
		list-style: none;
		margin: 0;
		padding: 0;
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

	.p4 {
		margin-top: 100rpx;
		.xia {
			margin: 10rpx 0;
			border-top: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;

			span:nth-child(1) {
				color: red;
				font-size: 36rpx;
				font-weight: 700;
			}

			span:nth-child(2) {
				color: #ccc;
			}

			span:nth-child(3) {
				float: right;
				font-size: 34rpx;
				font-weight: 700;
				color: red;
			}
		}

		.box4 {
			margin-bottom: 50rpx;

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
		}
	}
</style>
