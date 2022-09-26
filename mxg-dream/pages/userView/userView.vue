<template>
	<view class="box">
		<div class="top">
			<p class="pp" @click="$router.go(-1)">&lt;</p>
			<h4>个人资料</h4>
			<p></p>
		</div>
		<ul class="u1">
			<li class="li1">
				<p>头像</p>
				<p>
					<img :src="user.imageUrl" alt="">
					<span>></span>
				</p>
			</li>
			<li>
				<p>用户名</p>
				<p>
					<span>{{user.nickName}}</span>
					<span>></span>
				</p>
			</li>
			<li>
				<p>手机号</p>
				<p>
					<span>{{user.mobile}}</span>
					<span>></span>
				</p>
			</li>
		</ul>
		<ul class="u2">
			<li>
				<p>昵称</p>
				<p>
					<span>{{user.username}}</span>
					<span>></span>
				</p>
			</li>
			<li>
				<p>性别</p>
				<p>
					<span v-if="user.sex==0">男</span>
					<span v-else>女</span>
					<span>></span>
				</p>
			</li>
		</ul>
		<button @click="signout">退出登录</button>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog  title="你确定要退出吗？" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>

	</view>
</template>

<script>
	import {useRoute,useRouter} from 'vue-router'
	import {reactive,toRefs,ref} from 'vue'
	export default {
		setup() {
			const router =useRouter()
			const popup=ref(null)
			const data=reactive({
				user:{},
			})
		 data.user=JSON.parse(sessionStorage.getItem('data'))
		 console.log(data.user);
		 const signout=()=>{
			 // uni.switchTab({
			 // 	url:'/pages/mineView/mineView'
			 // })
			 popup.value.open()
			
		 }
		 // 关闭
		 const close=()=>{
			 console.log(12);
			 popup.value.close()
		 }
		 // 确定关闭
		 const confirm=()=>{
			 console.log(1);
			 router.push('/pages/mineView/mineView')
			 sessionStorage.clear()
		 }
		 return {
			 ...toRefs(data),
			 signout,
			 popup,
			 close,
			 confirm
		 }
		}
	}
</script>

<style lang="scss">
	.box{
		width: 100%;
		height: 100vh;
		background-color: #f8f9fb;
	}
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.top{
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.pp{
			margin-left: 12rpx;
		}
	}
	.u1{
		li{
			display: flex;
			justify-content: space-between;
			height: 70rpx;
			line-height: 70rpx;
			border: 1px solid #f6f6f9;
			box-sizing: border-box;
			padding: 0 20rpx;
			background-color: #fff;
			img{
				width: 60rpx;
				height: 60rpx;
				position: relative;
				top: 20rpx;
			}
			p {
				span:nth-child(2){
					margin-left: 20rpx;
					font-size: 40rpx;
					color: #ccc;
				}
			}
		}
		.li1{
			height: 120rpx;
			line-height: 120rpx;
		}
	}
	.u2{
		margin-top: 20rpx;
		li{
			display: flex;
			justify-content: space-between;
			height: 70rpx;
			line-height: 70rpx;
			border: 1px solid #f6f6f9;
			box-sizing: border-box;
			padding: 0 20rpx;
			background-color: #fff;
			img{
				width: 60rpx;
				height: 60rpx;
			}
			p {
				span:nth-child(2){
					margin-left: 20rpx;
					font-size: 40rpx;
					color: #ccc;
				}
			}
		}
	}
	button{
		background-color: #fff;
		margin-top: 50rpx;
		border: 0;
	}
</style>
