<template>
	<view class="bx">
		<view class="box">
			<view class="login-box" >
				<view class="img-box">
					<view class="left">
						<image v-if="token==null"  src="http://m.mengxuegu.com/static/logo.png" alt=""></image>
						<image v-if="token" :src="names.imageUrl" mode=""></image>
					</view>
					<view class="text" @click="toLogin">
						<span v-if="token==null">请登录</span>
						<span v-if="token">{{names.nickName}}</span>
						<p v-if="token">用户名:{{names.username}}</p>
					</view>
					
				</view>
				<view class="right" @click="users">
					&gt;
				</view>
			</view>

		</view>
		<ul class="u1">
			<li class="list" @click="order">
				<div class="left">
					<img src="../../static/images/dd.png" alt="">
					我的订单
				</div>
				<div class="right">
					&gt;
				</div>
			</li>
			<li class="list" @click="balance">
				<div class="left">
					<img src="../../static/images/ye.png" alt="">
					我的余额
				</div>
				<div class="right">
					&gt;
				</div>
			</li>
			<li class="list" @click="study">
				<div class="left">
					<img src="../../static/images/xx.png" alt="">
					我的学习
				</div>
				<div class="right">
					&gt;
				</div>
			</li>
		</ul>
		<ul class="u2">
			<li class="list" @click="setups">
				<div class="left">
					<img src="../../static/images/sz.png" alt="">
					设置
				</div>
				<div class="right">
					&gt;
				</div>
			</li>
			<li class="list" @click="feedback">
				<div class="left">
					<img src="../../static/images/yj.png" alt="">
					意见反馈
				</div>
				<div class="right">
					&gt;
				</div>
			</li>
		</ul>
		<ul class="u3">
			<li class="list" @click="opinion">
				<div class="left">
					<img src="../../static/images/gy.png" alt="">
					关于我们
				</div>
				<div class="right">
					&gt;
				</div>
			</li>
			
		</ul>
	</view>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			
			const data= reactive({
				token:'',
				names:{}
			})
			
			
			const toLogin = () => {
				
				console.log(data.token);
				if(data.token==null){
					
					uni.navigateTo({
						url:'/pages/loginView/loginView'
					})
				}else{
					sessionStorage.getItem('token')
				}
			}
			// 跳转个人中心
			const users=()=>{
				if(data.token==null){
					uni.navigateTo({
						url:'/pages/loginView/loginView'
					})
				}else{
					uni.navigateTo({
						url:'/pages/userView/userView'
					})
				}
			}
			// 我的订单
			const order=()=>{
				console.log(1);
				if(data.token==null){
					uni.navigateTo({
						url:'/pages/loginView/loginView'
					})
				}else{
					uni.navigateTo({
						url:'/pages/orderView/orderView'
					})
				}
			}
			// 我的余额
			const balance=()=>{
				console.log(1);
				if(data.token==null){
					uni.navigateTo({
						url:'/pages/loginView/loginView'
					})
				}else{
					uni.navigateTo({
						url:'/pages/balanceView/balanceView'
					})
				}
			}
			// 我的学习
			const study=()=>{
				if(data.token==null){
					uni.navigateTo({
						url:'/pages/loginView/loginView'
					})
				}else{
					uni.navigateTo({
						url:'/pages/studyView/studyView'
					})
				}
			}
			// 跳转设置
			const setups=()=>{
				console.log(1);
			
					uni.navigateTo({
						url:'/pages/setupView/setupView'
					})
			}
			// 意见反馈
			const feedback=()=>{
				uni.navigateTo({
					url:'/pages/feedbackView/feedbackView'
				})
			}
			// 关于我们
			const opinion=()=>{
				uni.navigateTo({
					url:'/pages/opinionView/opinionView'
				})
			}
			return {
				...toRefs(data),
				toLogin,
				users,
				order,
				balance,
				study,
				setups,
				opinion,
				feedback
			}
		},
		onShow() {
			this.names = JSON.parse(sessionStorage.getItem('data'))
			this.token = sessionStorage.getItem('token')
		}
	}
</script>

<style lang="scss">
	.bx{
		background-color: #eee;
	}
	.u1,.u2,.u3{
		margin-top: 20rpx;
		background-color: #fff;
		padding-left: 0;
	}
	.list {
		display: flex;
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
		.left{
			font-size: 34rpx;
			margin-left: 40rpx;
			img{
				width: 50rpx;
				height: 50rpx;
				position: relative;
				top: 13rpx;
				margin-right: 20rpx;
			}
		}
		// padding: 0 6%;
		.right {
			margin-right: 40rpx;
			font-size: 20px;
			color: gray;
		}
	}

	.box {
		width: 100%;
		background-color: #345dc2;
		overflow: hidden;
		.login-box {
			width: 100%;
			height: 250rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
			padding: 0 6%;
			box-sizing: border-box;
			margin-top: 100rpx;

			.img-box {
				width: 60%;
				display: flex;
				align-items: center;
				width: 100%;
				.text {
					font-weight: 700;
					font-size: 40rpx;
					margin-left: 5%;
					p{
						width: 100%;
						font-size: 34rpx;
						margin-top: 5rpx;
						font-weight: 300;
						color: #ccc;
					}
				}
			}

			.left {
				width: 150rpx;
				height: 150rpx;

				background-color: white;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50px;
				}
			}
		}
	}
</style>
