import {request} from '../uilts/request.js'
import * as TS from './define.ts'
// 获取轮播图
const getSwiperData = () => {
	return request('/home/swiperdata').then((res: TS.SwiperData) => res, err => err)
}
// 获取导航栏
const getNavData = () => {
	return request('/home/catitems').then((res: TS.NavData) => res, err => err)
}

export {
	getSwiperData,
	getNavData
}