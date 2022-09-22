<template>
	<scroll-view scroll-x class="nav">
		<view v-for="item in data" :key="item.id" :class="{'nav-item':true, 'active': activeId == item.id}"
			@click="chengNav(item.id)" :style="{'width':data.length > 3 ? '20%' : '33%'} ">
			{{item.name}}
		</view>
	</scroll-view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		props: ['data'],
		setup(props, ctx) {
			const data = reactive({
				activeId: 0
			})

			// 改变导航栏
			const chengNav = (id) => {
				data.activeId = id
				ctx.emit('chengNav', id)
			}

			return {
				...toRefs(data),
				chengNav
			}
		},
	}
</script>

<style lang="scss">
	.active {
		color: #007aff;
	}

	.active:before {
		position: absolute;
		content: "";
		width: 26px;
		height: 2px;
		border-bottom: 3px solid #007aff;
		left: 50%;
		bottom: 3px;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		-webkit-transition: .3s;
		transition: .3s;
	}

	.nav {
		position: fixed;
		top: 44px;
		left: 0;
		width: 100%;
		white-space: nowrap;
		border-bottom: 1px solid #efeff4;
		height: 40px;
		background-color: #fff;

		.nav-item {
			position: relative;
			font-size: 15px;
			display: inline-block;
			text-align: center;
			line-height: 40px;
		}
	}
</style>
