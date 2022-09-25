<template>
	<view class="bx">
		<!-- 阅读详情页面 -->
		<div class="top">
			<p @click="$router.go(-1)">&lt;</p>
			<h4 class="p">{{rends.title}}</h4>
			<p></p>
		</div>
		<div class="nav">
			<ul>
				<li v-for="item in list" :key="item.id">{{item.name}}</li>
			</ul>
		</div>
		<div class="con">
			<h2>{{rends.title}}</h2>
		</div>
		<div class="name">
			<img :src="rends.userImage" alt="">
			<p class="p1s">{{rends.nickName}}</p>
			<p class="pp">·<span>{{rends.updateDate}}</span>·
				<span>{{rends.viewCount}}阅读</span>
			</p>
		</div>
		<div class="bom" v-html="rends.htmlContent">
		</div>
		<div class="xia">
			<div class="navs">
				<p></p>
				<p>热门评论</p>
			</div>
			<ul>
				<li v-for="item in arrList" :key="item.id">
					<div class="left">
						<img :src="item.userImage" alt="">
						<div class="con">
							<p class="p1">
								<p class="spss">{{item.nickName}}</p>
								<p class="sps"> {{item.createDate}} </p>
							</p>
							<p class="p2">{{item.content}}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="foot">
				<div class="a">
					<input type="text" placeholder="有何高见,展开讲讲......">
					<button>提交</button>
				</div>
		</div>
	</view>
</template>

<script>
	import {
		rends,
		comments
	} from '@/api/http/http.js'
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				rends: {},
				list: [],
				arrList: []
			})
			const route = useRoute()
			console.log(route.query.id);
			// 阅读详情
			rends(route.query.id).then(res => {
				console.log(res);
				data.rends = res.data
				data.list = res.data.labelList
			})
			// 阅读评论
			comments(route.query.id).then(res => {
				console.log(res);
				data.arrList = res.data

			})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.foot{
		border-top: 1px solid #ccc;
		margin: 20rpx 0 0 0;
		width: 100%;
		position: fixed;
		bottom: 0;
		
		.a{
			margin-top: 20rpx;
			width: 100%;
			display: flex;
			margin-bottom: 20rpx;
			input{
				width: 80%;
				background-color: #f8f9fb;
				border-radius:10px ;
				height: 60rpx;
				font-size: 18rpx;
			}
			button{
				width: 100rpx;
				font-size: 14rpx;
			}
		}
	}
	.xia {
		box-sizing: border-box;
		padding: 20rpx;

		.navs {
			display: flex;
			background-color: #fff;
			height: 70rpx;
			line-height: 70rpx;

			p:nth-child(1) {
				margin-left: 10rpx;
				margin-top: 13rpx;
				width: 3px;
				height: 40rpx;
				background-color: #6398ff;
			}

			p:nth-child(2) {
				margin-left: 30rpx;
				font-weight: 800;
				font-size: 30rpx;
			}
		}

		ul {
			width: 100%;
			margin-bottom: 75rpx;
			li {
				width: 100%;
				margin-top: 30rpx;
				height: 80rpx;
				height: 80rpx;
				// display: flex;
				// justify-content: space-between;

				.left {
					width: 100%;
					display: flex;
					img {
						width: 50rpx;
						height: 50rpx;
						border-radius: 50px;
					}
					.con {
						width: 100%;
						margin-left: 15rpx;
						.p1 {
							width: 100%;
							font-size: 22rpx;
							color: #ccc;
							display: flex;
							justify-content: space-between;
						}

						.p2 {
							font-size: 26rpx;
							color: #000;
						}
					}
				}

				
			}
		}
	}

	.bx {
		box-sizing: border-box;
		padding: 10rpx 26rpx;
		overflow: hidden;
		.top {
			position: fixed;
			top: 0;
			background-color: #fff;
			width: 100%;
			height: 60rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.p {
				width: 50%;
				text-align: center;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}

		.name {
			margin: 20rpx 0;
			display: flex;

			img {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50px;
				position: relative;
				// top: 15rpx;
			}

			.p1s {
				// font-size: 22rpx !important;
				color: #000;
				margin-top: 5rpx;
				margin-left: 20rpx;
			}

			.pp {
				color: #ccc;
				font-size: 20rpx;
				margin-top: 12rpx;
			}

		}
	}

	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.nav {
		margin-top: 65rpx;
		ul {
			display: flex;
			margin: 20rpx 0;

			li {
				padding: 5rpx 10rpx;
				border-radius: 20px;
				border: 1px solid #6398ff;
				color: #6398ff;
				margin-right: 20rpx;
			}
		}
	}
</style>
