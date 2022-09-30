//引入 http
import http from '@/api/http.js'
import * as TS from '@/api/define'

/**首页轮播图*/
const getBanner: () => Promise<TS.BannerItem[]> = () => { 
	return http({
		url: 'home/swiperdata'
	})
}
/**首页导航栏*/
const getHomeCate: () => Promise<TS.HomeCateListItme[]>  = () => {
	return http({
		url: 'home/catitems'
	})
}
/**首页楼层数据*/
const getFloorData: () => Promise<TS.floorDataItem[]>  = () => {
	return http({
		url: 'home/floordata'
	})
}
/**分类页面左侧导航栏*/
const getCategories: () =>Promise<TS.CateList>  = () => {
	return http({
		url: 'categories'
	})
}
/**商品搜索列表*/
const getSearchVal: (msg: string) => Promise<TS.searchList>  = (msg) => {
	return http({
		url: `goods/qsearch?query=${msg}`
	})
}


const getGoodsDetail: (msg: number) =>Promise<TS.searchDetail>  = (msg) => {
	return http({
		url: `goods/detail?goods_id=${msg}`
	})
}
export {
	getBanner,
	getHomeCate,
	getFloorData,
	getCategories,
	getSearchVal,
	getGoodsDetail
}