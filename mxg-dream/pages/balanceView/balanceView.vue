<template>
	<view class="box">
		<div class="top">
			<p class="pp" @click="$router.push('/pages/mineView/mineView')">&lt;</p>
			<h4>我的余额</h4>
			<p></p>
		</div>
		<div class="ye">
			<div class="con">
				<p>余额:</p>
				<p>{{price}}币</p>
			</div>
		</div>
		<div class="cz">
			<p class="c">充值:</p>
			<ul>
				<li v-for="item in list" :class="{'active':id==item.id}" :key="item.id" @click="btn(item)">
					<p>{{item.title}}</p>
					<p>￥{{item.price}}</p>
				</li>
			</ul>
		</div>
		<div class="foot">
			<h4>充值说明:</h4>
			<p>1.在IOS设备的APP要进行充值后，使用虚拟币消费。</p>			<p>2.充值后不能在非IOS设备使用，与安卓版和网站余额不通用。</p>
			<p>3.充值后没有使用期限，但不可提现、退换、转让和申请发票。</p>			<p>4.如遇无法充值、充值失败等问题，可关注[梦学谷]公众号，联系我们解决。</p>
		</div>
		<div class="bom">
			<button>立即充值</button>
		</div>
	</view>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	import {balance} from '@/api/http/http.js'
	export default {
		name: "balanceView",
		setup() {
			const data=reactive({
				price:'',
				list:[
					{
					title:'0币',
					id:1,
					price:'0'
				},
				{
					title:'30币',
					id:2,
					price:'30'
				},
				{
					title:'60币',
					id:3,
					price:'60'
				},
				{
					title:'90币',
					id:4,
					price:'90'
				},
				{
					title:'120币',
					id:5,
					price:'120'
				},
				{
					title:'150币',
					id:6,
					price:'150'
				}
				],
				id:0
			})
			const btn=(item)=>{
				console.log(item);
				data.id=item.id
			}
			// 请求QQ币
			balance().then(res=>{
				console.log(res);
				data.price=res.data
			})
			return {
				...toRefs(data),
				btn
			}
		}
	}
</script>

<style lang="scss">
	.box{
		overflow: hidden;
	}
	.bom{
		width: 100%;
		position: fixed;
		bottom: 20rpx;
		left: 0;
		box-sizing: border-box;
		padding: 0 20rpx;
		
		button{
			border-top: 1px solid #ccc;
			border-bottom: #748fd5;
			background-color: #345dc2;
			color: white;
			border-radius: 40rpx;
		}
	}
	.foot{
		box-sizing: border-box;
		padding: 0 20rpx;
		h4{
			margin: 30rpx 0;
			color: #7c7d7d;
		}
		p{
			color: #6e6d70;
			margin: 8rpx 0;
		}
	}
	.active{
		border: 1px solid red;
	}
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.cz{
		.c{
			margin: 15rpx 0;
			color: #ccc;
			margin-left: 20rpx;
		}
		ul{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			li{
				width: 30%;
				height: 120rpx;
				text-align: center;
				border-radius: 5px;
				background-color: #fcfcfc;
				margin: 5rpx;
				p:nth-child(1){
					margin-top: 30rpx;
					color: red;
					font-size: 32rpx;
				}
				p:nth-child(2){
					color: #9fa6af;
				}
			}
		}
	}
	.ye{
		width: 100%;
		height: 400rpx;
		background-color: #345dc2;
		display: flex;
		justify-content: center;
		align-items: center;
		.con{
			text-align: center;
			color: #fff;
			p:nth-child(2){
				font-size: 90rpx;
				font-weight: 500;
			}
		}
	}
	.top {
		width: 100%;
		height: 80rpx;
		background-color: #345dc2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		color: white;
		top: 0;
		left: 0;
		z-index: 9999;
		h4{
			font-size: 32rpx;
		}
		.pp {
			margin-left: 18rpx;
			font-size: 50rpx;
		}
	}
</style>
