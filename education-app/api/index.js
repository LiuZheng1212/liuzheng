import http from '@/common/js/request.js'

// 轮播图
async function getBanner() {
	const {
		data
	} = await http.get('article/api/advert/show/1')
	return data
}
// 分类列表
async function list() {
	const {
		data
	} = await http.get('article/api/category/label/list')
	return data
}
// 热门推荐
async function hot() {
	const {
		data
	} = await http.post('course/api/course/search', {
		content: null,
		sort: "hot",
		isFree: null,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}
// 近期上新
async function latest() {
	const {
		data
	} = await http.post('/course/api/course/search ', {
		content: null,
		sort: "new",
		isFree: null,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}
// 免费精选
async function charge() {
	const {
		data
	} = await http.post('/course/api/course/search ', {
		content: null,
		sort: null,
		isFree: 1,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}
// 付费精选
async function charges(page, pageSize) {
	const {
		data
	} = await http.post('/course/api/course/search ', {
		content: null,
		sort: null,
		isFree: 0,
		labelId: null,
		categoryId: null,
		current: page,
		size: pageSize
	})
	return data
}
export {
	getBanner,
	list,
	hot,
	latest,
	charge,
	charges
}
