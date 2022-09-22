import http from './http'
/** 获取轮播图数据*/
const getbanner = () => {
	let data = http.get('article/api/advert/show/1')
	return data
}

/** 获取推荐分类*/
const getHotrecom = () => {
	let data = http.get('article/api/category/label/list')
	return data
}

/** 获取热门数据 */
const getHotList = (msg) => {
	let data = http.post('course/api/course/search', msg)
	return data
}

/**获取近期上新数据*/
const getNewList = (msg) => {
	let data = http.post('course/api/course/search', msg)
	return data
}

/**获取免费精选*/
const getFreeList = (msg) => {
	let data = http.post('course/api/course/search', msg)
	return data
}

/**获取付费精选*/
const getPaymentList = (msg) => {
	let data = http.post('course/api/course/search', msg)
	return data
}

// 获取阅读列表
const getArticleList = (msg) => {
	let data = http.post('article/api/article/search', msg)
	return data
}

// 获取问答列表
const getReplyList = (msg) => {
	let data = http.post(`question/api/question/${msg.type}`,msg)
	return data
}
export {
	getbanner,
	getHotrecom,
	getHotList,
	getNewList,
	getFreeList,
	getPaymentList,
	getArticleList,
	getReplyList
}
