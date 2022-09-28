<template>
	<view class="box">
		<div class="top">
			<p @click="$router.go(-1)"></p>
		</div>
		<div class="nav">
			<ul>
				<li v-for="item in list" :key="item.id">{{item.name}}</li>
			</ul>
		</div>
		<div class="name">
			<img :src="arr.userImage" alt="">
			<p class="p1s">{{arr.nickName}}</p>
			<p class="pp">·<span>{{arr.updateDate}}</span>·
				<span>{{arr.viewCount}}阅读</span>
			</p>
		</div>
		<div class="bom" v-html="arr.htmlContent"></div>
		<div class="xia">
			<div class="navs">
				<p></p>
				<p>2个回答</p>
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
			<p>已关注问题</p>
			<p>已回答问题</p>
		</div>
	</view>
</template>

<script>
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import {
		reactive,
		toRefs
	} from 'vue'
	import {
		ask,
		askcomment
	} from '../../api/question.js'
	export default {
		setup() {
			const route = useRoute()
			console.log(route.query.id);
			const data = reactive({
				list: [],
				arr: {},
				arrList: []
			})
			// 请求详情
			ask(route.query.id).then(res => {
				console.log(res);
				data.arr = res.data
				data.list = res.data.labelList
			})
			// 请求评论
			askcomment(route.query.id).then(res => {
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
	.foot {
		width: 100%;
		height: 90rpx;
		position: fixed;
		left: 0;
		background-color: #f8f9fb;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		p {
			font-size: 26rpx;
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

	* {
		margin: 0;
		padding: 0;
		list-style: none;
		box-sizing: border-box;
	}

	.box {
		padding: 10rpx 25rpx;
	}

	.top {
		position: fixed;
		top: 0;
		background-color: #fff;
		width: 100%;
		height: 60rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		p {
			position: relative;
		}
		p::before {
			content: '';
			position: absolute;
			display: inline-block;
			width: 20rpx;
			height: 20rpx;
			border-left: 4rpx solid #421800;
			border-bottom: 4rpx solid #421800;
			transform: rotate(45deg);
		}
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
</style>
