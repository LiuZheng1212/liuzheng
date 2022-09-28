import http from '@/common/js/request.js'

// 获取全部分类导航数据
async function getCateNav() {
	const {
		data
	} = await http.get('article/api/category/label/list')
	return data
}

// 获取课程数据
async function getCourseList(id, current, size,sort,isFree,labelId) {
	const {
		data
	} = await http.post('course/api/course/search', {
		categoryId: id,
		content: null,
		current: current,
		isFree: isFree,
		labelId: labelId,
		size: size,
		sort: sort
	})
	return data
}
// 获取文章数据
async function getArticleData(id, current, size,sort,labelId){
	const {data}=await http.post('article/api/article/search',{
		categoryId: id,
		content: null,
		current: current,
		labelId: labelId,
		size: size,
		sort: sort
	})
	return data
}

// 获取问答数据
async function getAskData(id, current, size,sort){
	const {data}=await http.post('question/api/question/search',{
		categoryId: id,
		content: null,
		current: current,
		labelId: null,
		size: size,
		sort: sort
	})
	return data
}

export {
	getArticleData,
	getCourseList,
	getAskData,
	getCateNav
}