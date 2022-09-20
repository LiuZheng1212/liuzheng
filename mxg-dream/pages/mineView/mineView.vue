<template>
	<view>
		<view class="box">
			<view class="login-box" @click="toLogin">
				<view class="img-box">
					<view class="left">
						<image src="http://m.mengxuegu.com/static/logo.png" mode=""></image>
					</view>
					<view class="text">
						请登录
					</view>
				</view>
				<view class="right">
					&gt;
				</view>
			</view>
		</view>
		
		<directionView></directionView>
		<directionView></directionView>
		<directionView></directionView>
		<directionView></directionView>
		<directionView></directionView>
	</view>
</template>

<script>
	export default {
		setup(){
			const toLogin=()=>{
				uni.navigateTo({
					url:'/pages/loginView/loginView'
				})
			}
			return{
				toLogin
			}
		}
	}
</script>

<style lang="scss">
	.box{
		width: 100%;
		background-color: #345dc2;
		.login-box{
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
			.img-box{
				width: 60%;
				display: flex;
				align-items: center;
				.text{
					font-weight: 700;
					font-size: 40rpx;
					margin-left: 5%;
				}
			}
			.left{
				width: 150rpx;
				height: 150rpx;
				
				background-color: white;
			image{
				width: 100%;
				height: 100%;
			}
			}
		}
	}

</style>
