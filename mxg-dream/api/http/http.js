import http from '@/common/js/request.js'
// 请求轮播图
async function getBanner() {
	const {
		data
	} = await http.get('article/api/advert/show/1')
	return data
}
// 请求分类
async function list() {
	const {
		data
	} = await http.get('article/api/category/label/list')
	return data
}
// 请求热门数据
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
		size: 5
	})
	return data
}
// 请求近期上新
async function news() {
	const {
		data
	} = await http.post('course/api/course/search', {
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
// 请求免费精选
async function free() {
	const {
		data
	} = await http.post('course/api/course/search', {
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
// 请求付费精选
async function nick(current, size) {
	const {
		data
	} = await http.post('course/api/course/search', {
		content: null,
		sort: null,
		isFree: 1,
		labelId: null,
		categoryId: null,
		current: current,
		size: size
	})
	return data
}
// 请求热门详情接口
async function details() {
	const {
		data
	} = await http.get(`course/api/course/null`)
	return data
}
// 请求热门章节接口
async function chapter() {
	const {
		data
	} = await http.get(`course/api/chapter/section/list/null`)
	return data
}
// 请求评论接口
async function comment() {
	const {
		data
	} = await http.get(`course/api/comment/list/null`)
	return data
}
// 请求套餐接口
async function group() {
	const {
		data
	} = await http.get(`course/api/group/list/null`)
	return data
}

// 请求阅读推荐接口
async function read(current, size, categoryId) {
	const {
		data
	} = await http.post('article/api/article/search', {
		current: current,
		size: size,
		categoryId: categoryId
	})
	return data
}
// 请求问答热门问题
async function hots(a,current,size) {
	const {
		data
	} = await http.post(`question/api/question/${a}`, {current: 1, size: 10} )
	return data
}
// 阅读详情
async function rends(id) {
	const {
		data
	} = await http.get(`article/api/article/${id}`)
	return data
}
// 阅读评论
async function comments(id) {
	const {
		data
	} = await http.get(`article/api/comment/list/${id}`)
	return data
}
// 问答详情
async function ask(a,current,size) {
	const {
		data
	} = await http.get(`question/api/question/${a}`)
	return data
}
// 问答评论
async function askcomment(id) {
	const {
		data
	} = await http.get(`article/api/comment/list/${id}`)
	return data
}
// 登录接口
async function logins(mobile,code) {
	const {
		data
	} = await http.post('auth/login',{mobile, code})
	return data
}
// 请求订单
async function order() {
	const {
		data
	} = await http.get('pay/order/user/list')
	return data
}
// 我的余额 
async function balance() {
	const {
		data
	} = await http.get('pay/user/balance')
	return data
}
// 我的学习 
async function study() {
	const {
		data
	} = await http.get('course/course/study/list')
	return data
}
export {
	getBanner,
	list,
	hot,
	news,
	free,
	nick,
	details,
	chapter,
	comment,
	group,
	read,
	hots,
	rends,
	comments,
	ask,
	askcomment,
	logins,
	order,
	balance,
	study
}
