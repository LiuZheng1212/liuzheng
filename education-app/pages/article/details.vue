<template>
	<view class="content">
		<view class="header">
			<view @click="back"><text class="gt"></text></view>
			<text class="title">{{ detailsList.title }}</text>
		</view>
		<view class="content-box">
			<div class="nav">
				<ul>
					<li v-for="item in detailsList.labelList" :key="item.id">{{item.name}}</li>
				</ul>
			</div>
			<div class="con">
				<h2>{{detailsList.title}}</h2>
			</div>
			<div class="name">
				<img :src="detailsList.userImage" alt="">
				<p class="p1s">{{detailsList.nickName}}</p>
				<p class="pp">·<span>{{detailsList.updateDate}}</span>·
					<span>{{detailsList.viewCount}}阅读</span>
				</p>
			</div>
			<div class="bom" v-html="detailsList.htmlContent"></div>
			<div class="xia">
				<div class="navs">
					<p></p>
					<p>热门评论</p>
				</div>
				<ul>
					<li v-for="item in arrList"  :key="item.id">
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
	</view>
</template>

<script>
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		details,
		comment
	} from '../../api/article.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const route = useRoute()
			const router = useRouter()
			const data = reactive({
				detailsList: {},
				arrList: []
			})
			details(route.query.id).then(res => {
				data.detailsList = res.data
			})
			comment(route.query.id).then(res => {
				data.arrList = res.data
			})
			// 返回
			const back = () => {
				router.back()
			}

			return {
				...toRefs(data),
				back
			}
		}
	}
</script>

<style lang="scss">
	.foot {
		border-top: 1px solid #eee;
		margin: 20rpx 0 0 0;
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #fff;

		.a {
			margin-top: 20rpx;
			width: 100%;
			display: flex;
			margin-bottom: 20rpx;

			input {
				width: 80%;
				background-color: #f8f9fb;
				border-radius: 10px;
				height: 60rpx;
				font-size: 18rpx;
			}

			button {
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

	.content {
		position: relative;
		.content-box {
			padding: 20rpx;
			box-sizing: border-box;
		}
		.header {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100rpx;
			font-weight: 600;
			border-bottom: 1px solid #eee;
			position: sticky;
			top: -1rpx;
			background-color: #fff;
			view {
				width: 30px;
				position: absolute;
				left: 0;
			}

			.gt::before {
				content: '';
				position: absolute;
				display: inline-block;
				width: 20rpx;
				height: 20rpx;
				border-left: 4rpx solid #421800;
				border-bottom: 4rpx solid #421800;
				transform: rotate(45deg);
				left: 15px;
				top: -7px;
			}

			.title {
				width: 70%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-align: center;
			}
		}
	}
</style>
