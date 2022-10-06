<template>
	<view>
		<!-- 模态框 -->
		<u-popup v-model="show" mode="center">
					<view class="pop">
							<view class="tit">
								是否删除该商品？
							</view>
						<view class="but">
							<u-button type="primary" size="mini" @click="yes">确定</u-button>
							<u-button size="mini" @click="no">取消</u-button>
						</view>
					</view>
		</u-popup>
		<view class="top">
			<view class="add" @click="getAdd" v-if="addRess">
				获取收货地址
			</view>
		</view>
		<view class="title">
			购物车
		</view>
		<view class="car_box">
			<view class="car_item" v-for="(item,index) in goods" :key="index">
				<view class="left">
					<u-checkbox v-model="item.status" @change="checkChange(index)"/>
				</view>
				<view class="img">
					<image :src="item.url" mode=""></image>
				</view>
				<view class="right">
					<view class="name">{{item.name}}</view>
					<view class="price">￥{{item.price}}</view>
					<view><u-number-box v-model="item.number" @plus="valChange(index)" @minus="val(index)"></u-number-box></view>
				</view>
			</view>
		</view>
		<view class="foot">
				<view class="f1">
					<u-checkbox v-model="flag" @change="change" /><text>全选</text>
				</view>
				<view class="f2">
					<view class="f2-1">
						合计:<text>￥{{selectPrice.a}}</text>
					</view>
					<view class="f2-2">
						包含运费
					</view>
				</view>
				<view class="f3">
					<u-button type="error">结算（{{selectPrice.b}}）</u-button>
				</view>
		</view>
	</view>
</template>

<script lang="ts">
import { reactive, toRefs,ref ,computed} from "vue"
	export default {
		setup() {
			const data = reactive({
				goods: [],
				ind:0,
				obj:{
				}
			})
			const flag=ref(false)
			const show=ref(false)
			const addRess=ref(true)
			const valChange = (index: number) => {
				data.goods[index].number +1
				set()
			}
			const yes=()=>{
				data.goods.splice(data.ind,1)
				show.value=false
				uni.showToast({
					title: '删除成功'
				})
				set()
			}
			const no=()=>{
				data.goods[data.ind].number=1
				set()
				show.value=false
				get()
			}
			const get=()=>{
				uni.getStorage({
					key: 'goods',
					success: (res) => {
						data.goods = JSON.parse(res.data)
					}
				})
			}
			const set=()=>{
				uni.setStorage({
					key: 'goods',
					data: JSON.stringify(data.goods)
				})
			}
			const val=(index:number)=>{
				data.ind=index
				data.goods[index].number-1
				if(data.goods[index].number==0){
					show.value=true
				}
				set()
			}
			const change=()=>{
				flag.value=!flag.value
				console.log(flag.value);
				data.goods.forEach(item=>item.status=flag.value)
			}
			const checkChange=(index:number)=>{
				data.goods[index].status=!data.goods[index].status
				flag.value=data.goods.every(item=>item.status)
			}
			const selectPrice=computed(()=>{
				let num=0
				let price=0
				data.goods.forEach(item=>{
					if(item.status){
						price+=item.number*item.price
						num+=item.number
					}
				})
				return {a:price,b:num}
			})
			const getAdd=()=>{
				uni.chooseAddress({
					success: (res) => {
						data.obj=res
						addRess.value=false
					}
				})
			}
			return {
				...toRefs(data),
				valChange,
				show,
				yes,
				no,
				get,
				set,
				val,
				flag,
				change,
				checkChange,
				selectPrice,
				getAdd,
				addRess
			}
		},
		onShow() {
			this.get()
		}
	}
</script>

<style lang="scss">
	.top{
		width: 100%;
		height: 136rpx;
		display: flex;
		align-items: center;
		.add{
			width: 422rpx;
			text-align: center;
			line-height:  92rpx;
			margin: 0 auto;
			color: #1aad19;
			border: 1px solid #1aad19;
			font-size: 36rpx;
		}
	}
	.foot{
		position: fixed;
		bottom:0;
		width: 100%;
		display: flex;
		height: 88rpx;
		align-items: center;
		border-bottom: 2rpx solid #ccc;
		z-index: 999;
		background-color: #fff;
		border-top: 2rpx solid #ccc;
		padding-left: 30rpx;
		.f1{
			flex:1.5;
		}
		.f2{
			flex:3;
			text-align: right;
			margin-right: 14rpx;
			.f2-1{
				text{
					font-size: 34rpx;
					color: #c00;
				}
			}
		}
		.f3{
			flex:1;
			u-button{
				button{
					height: 88rpx;
					width: 100%;
					border-radius: 0 !important;
					background-color: #c00;
				}
			}
		}
	}
	.pop{
		width: 600rpx;
		height: 300rpx;
		text-align: center;
		.tit{
			font-size: 40rpx;
			height: 150rpx;
			line-height: 150rpx;
			font-weight: 700;
		}
		.but{
			display: flex;
			justify-content: space-around;
		}
	}
	.car_box {
		padding: 20rpx;
		box-sizing: border-box;
		.car_item {
			display: flex;
			justify-content: space-between;
			height: 180rpx;
			align-items: center;
			margin: 20rpx 0;
			.left {
				width: 10%;
			}
			.img {
				width: 30%;
				height: 100%;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.right {
				width: 55%;
				.name {
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.price {
					color: #c00;
					margin: 10rpx 0;
				}
			}
		}
	}
.title {
	height: 80rpx;
	line-height: 80rpx;
	font-weight: 600;
	border: 1px solid #ccc;
}
</style>
