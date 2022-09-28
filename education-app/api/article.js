import http from '@/common/js/request.js'

// 阅读头部分类
async function classify() {
	const {data} = await http.get('/article/api/category/label/list')
	return data
}
// 切换分类接口
async function selectClassify(obj) {
	const {data} = await http.post('/article/api/article/search', {
		categoryId: obj.id,
		current: obj.page,
		size: obj.pageSize
	})
	return data
}

// 跳转阅读详情
async function details(id) {
	const {data} = await http.get(`/article/api/article/${id}`)
	return data
}

// 热门评论
async function comment(id) {
	const {data} = await http.get(`/article/api/comment/list/${id}`)
	return data
}


export {
	classify,
	selectClassify,
	details,
	comment
}