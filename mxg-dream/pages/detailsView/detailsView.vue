<template>
	<view>
		<uni-popup ref="popup" type="center">
			<view style="color: #fff;font-size: 40rpx;text-align: center;margin: 20rpx 0;" @click="closePopup">免费试看 ×</view>
			<video :src="videoItem" :autoplay="true" :show-center-play-btn="false"></video>
		</uni-popup>
		<div class="box">
			<div class="top">
				<p class="back" @click="$router.push('/pages/index/index')">&lt;</p>
				<img :src="conten.mainImage" alt="">
				<div class="content">
					<p><span class="price">￥154</span><s class="num">￥741</s><span class="prices">优惠券</span></p>
					<h3>{{conten.title}}</h3>
					<p class="p3"><span>{{conten.goodRate}}好评</span><span>{{conten.studyTotal}}人在学</span></p>
				</div>
			</div>
			<div class="list">
				<ul>
					<li v-for="item in list"
					 :key="item.id"
					  @click="btn(item.id)"
					  :class="item.id==ids?'active':''"
					  >
						{{item.title}}
					</li>
				</ul>
				<div class="bom">
					<!-- 详情 -->
					<div class="p1" v-if="ids==1">
						<img :src="conten.detailUrls" alt="">
					</div>
					<!-- 章节 -->
					<div class="p2" v-else-if="ids==2" >
						<div class="chapter">
							<div class="name" v-for="item,index in chapter" :key="index">
								<h3>第{{index+1}}章 {{item.name}}</h3>
								<div class="titles" v-for="obj,ind in item.sectionList" @click="openVideo(obj)" :key="ind">
									<p class="pp">
										<span>></span>
										<span>{{index+1}}-{{ind+1}}</span>
										<span>{{obj.name}}</span>
										<span>{{obj.isFree==1?'试看':''}}</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="p3" v-else-if="ids==3">
						<div class="u1">
							<li v-for="item in comment" :key="item.id">
								<div class="bx">
									<div class="left">
										<div class="z">
											<img :src="item.userImage" alt="">
										</div>
										<div class="y">
											<h4>{{item.nickName}}</h4>
											<p>{{item.createDate}}</p>
										</div>
									</div>
									<div class="right">
										<img src="https://img0.baidu.com/it/u=352234144,374044682&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=457" alt="">
									</div>
								</div>
								<p class="sp">{{item.content}}</p>
								<div class="con" v-if="item.children!=null">
									<div class="a">
										<span>讲师回复:</span>
										<span>
											{{item.children.content}}
										</span>
									</div>
								</div>
							</li>
						</div>
					</div>
					<div class="p4" v-else>
						<div class="box4" v-for="item1 in group" :key="item1.id" >
							<h3>{{item1.title}}</h3>
							<view class="course-item" v-for="item in item1.list" @click="btns(item1)" :key="item.id" >
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
											<image class="img2" src="../../static/images/video.png" mode=""></image> {{item.studyTotal}}人在学
										</view>
									</view>
								</view>
							</view>
							<div class="xia">
								<span>￥{{item1.groupPrice}}</span>
								<span><s>￥{{item1.totalPrice}}</s></span>
								<span @click="buy(item1)">购买套餐</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="foot">
				<button>立即观看</button>
			</div>
		</div>
	</view>
</template>

<script>
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import {
		details,
		chapter,
		comment,
		group
	} from '@/api/http/http.js'
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const router = useRouter()
			const route = useRoute()
			// console.log(route.query.id);
			const data = reactive({
				// id: '', //传过来的id
				conten: [], //详情
				ids:1,
				list: [{
						title: '详情',
						id: 1
					},
					{
						title: '章节',
						id: 2
					},
					{
						title: '评论',
						id: 3
					},
					{
						title: '套餐',
						id: 4
					}
				],
				chapter:[],//章节详情
				comment:[],//评论详情
				group:[], //套餐详情
				videoItem: ''
			})
			const popup = ref(null)
			// data.id = route.query.id
			// 请求详情
			details().then(res => {
				// console.log(res);
				if (res.code == 20000) {
					data.conten = res.data
				}
			})
			// 请求章节
			chapter().then(res=>{
				// console.log(2);
				// console.log(1,res);
				data.chapter=res.data
			})
			// 请求评论
			comment().then(res=>{
				// console.log(2);
				// console.log(1,res);
				data.comment=res.data
			})
			// 请求套餐
			group().then(res=>{
				// console.log(2);
				console.log(1,res);
				data.group=res.data
				// data.comment=res.data
			})
			// 点击高亮
			const btn=(e)=>{
				// console.log(e);
				data.ids=e
			}
			// 关闭弹框
			const closePopup = () => {
				popup.value.close()
			}
			// 打开弹框 看视频
			const openVideo = (item) => {
				if(item.isFree) {
					popup.value.open()
					data.videoItem = item.videoUrl
				} else {
					uni.showToast({
						icon: 'none',
						title: '请先购买'
					})
				}
				
			}
			const btns=(item)=>{
				console.log(item.id);
				uni.navigateTo({
					url:`/pages/detailsView/detailsView?id=${item.id}
					`
				})
			}
			// 购买
			const buy=(item)=>{
				console.log(item);
				const group=JSON.stringify(item)
				uni.navigateTo({	
					url:`/pages/buysView/buysView?item=${group}`,
				})
			}
			return {
				...toRefs(data),
				btn,
				openVideo,
				popup,
				closePopup,
				btns,
				buy
			}
		}
	}
</script>

<style lang="scss">
	.foot{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		button{
			border-radius: 30px;
			background-color: #345dc2;
			color: #fff;
		}
	}
	.top{
		position: relative;
		.back{
			position: absolute;
			top: 10rpx;
			left: 10rpx;
			width: 65rpx;
			height: 65rpx;
			background-color: rgba(0, 0, 0, 0.5);
			border-radius: 50px;
			text-align: center;
			line-height: 70rpx;
			font-size: 54rpx;
			color: #fff;
		}
	}
	.active{
		color: #70b4ff;
		border-bottom: 3px solid #70b4ff;
	}
	*{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	.list{
		ul{
			width: 100%;
			display: flex;
			justify-content: space-around;
		}
		.bom{
			
			padding: 0 30rpx;
			.p1{
				img{
					width: 100%;
				}
			}
			.p2{
				h3{
					height: 80rpx;
					line-height: 80rpx;
				}
				.pp{
					height: 80rpx;
					line-height: 80rpx;
					border-bottom: 1px solid #ccc;
					span:nth-child(1){
						display: inline-block;
						width: 30rpx;
						height: 30rpx;
						border-radius: 50px;
						background-color: #000;
						color: #fff;
						font-size: 12rpx;
						text-align: center;
						line-height: 30rpx;
					}
					span:nth-child(2){
						margin-left: 20rpx;
					}
					span:nth-child(3){
						margin-left: 20rpx;
					}
					span:nth-child(4){
						display: inline-block;
						float: right;
						margin-right: 25rpx;
						color: #86bfff;
					}
				}
			}
			.p3{
				li{
					border-bottom: 1px solid #ccc;
					margin-bottom: 10rpx;
				}
				.u1{
					
					.sp{
						margin: 15rpx 0;
					}
					
					.bx{
						display: flex;
						justify-content: space-between;
						.left{
							display: flex;
							.z{
								img{
									width: 80rpx;
									height: 80rpx;
									border-radius: 50px;
								}
							}
						}
						.right{
							img{
								width: 30rpx;
								height: 30rpx;
								border-radius: 50px;
							}
						}
					}
					.con{
						.a{
							box-sizing: border-box;
							padding: 10rpx;
							width: 100%;
							// height: 100rpx;
							background-color: #eee;
							border-radius: 10px;
							// line-height: 80rpx;
							margin-bottom: 20rpx;
						}
					}
				}
			}
			.p4{

				.xia{
					margin: 10rpx 0;
					border-top: 1px solid #ccc;
					border-bottom: 1px solid #ccc;
					width: 100%;
					height: 80rpx;
					line-height: 80rpx;
					span:nth-child(1){
						color: red;
						font-size: 36rpx;
						font-weight: 700;
					}
					span:nth-child(2){
						color: #ccc;
					}
					span:nth-child(3){
						float: right;
						font-size: 34rpx;
						font-weight: 700;
						color: red;
					}
				}
				.box4{
					margin-bottom: 50rpx;
					.img1{
							position: relative;
							top: 2rpx;
							left: 5rpx;
						}
						.img2{
							position: relative;
							top: 2rpx;
							left: 2rpx;
						}
					.course-item{
							width: 100%;
							padding: 2%;
							margin-bottom: 3%;
							height: 240rpx;
							box-sizing: border-box;
							display: flex;
							flex-wrap: wrap;
							border-bottom: 1px solid #eee;
							.course-img{
								position: relative;
								width: 40%;
								image{
									width: 100%;
									height: 100%;
									border-radius: 20rpx;
								}
								.imgs{
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
							.course-text{
								image {
									width: 30rpx;
									height: 30rpx;
								}
								flex: 1;
								margin-left: 4%;
								.first-text{
									font-weight: 600;
									
								}
								.teacther-text{
									color: #5e5e5e;
									margin-top: 8%;
								}
								.bottom{
									width: 100%;
									display: flex;
									margin-top: 5rpx;
									justify-content: space-between;
									.left{
										color: orangered;
										
									} 
									.right{
										// margin-left: 16%;
										margin-right: 10rpx;
										
									}
								}
							}
						}
				}
			}
		}
	}
	.top {
		img {
			width: 100%;
		}
	}

	.content {
		box-sizing: border-box;
		padding: 30rpx 20rpx;

		.price {
			color: red;
			font-size: 50rpx;
			font-weight: 900;
		}

		.num {
			margin-left: 10rpx;
			color: #ccc;
		}

		.prices {
			display: inline-block;
			border: 1px solid red;
			border-radius: 10rpx;
			padding: 5rpx;
			color: red;
			font-size: 20rpx;
			margin-left: 20rpx;
		}

		.p3 {
			margin-top: 30rpx;
			color: #7d828f;

			span:nth-child(2) {
				margin-left: 30rpx;
			}
		}
	}
</style>
