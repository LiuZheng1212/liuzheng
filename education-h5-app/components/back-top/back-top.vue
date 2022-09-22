<template>
	<div class="back" v-show="showFlag" @click="goTop">
		<img src="https://www.mescroll.com/img/mescroll-totop.png" alt="">
	</div>
</template>

<script>
	export default {
		props: ['showFlag'],
		setup() {
			const goTop = () => {
				uni.pageScrollTo({
					scrollTop: 0
				})
			}

			return {
				goTop
			}
		},
	}
</script>

<style lang='scss'>
	.back {
		position: fixed;
		right: 10px;
		bottom: 80px;
		width: 80rpx;
		height: 80rpx;

		img {
			width: 100%;
			border-radius: 50%;
		}
	}
</style>
