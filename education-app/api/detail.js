import http from '@/common/js/request.js'

// 详情
async function detail() {
	const {data} = await http.get('/course/api/course/null')
	return data
}
// 章节
async function sections() {
	const {data} = await http.get('/course/api/chapter/section/list/null')
	return data
}
// 章节
async function comment() {
	const {data} = await http.get('/course/api/comment/list/null')
	return data
}
// 套餐
async function setmeal() {
	const {data} = await http.get('/course/api/group/list/null')
	return data
}

export {
	detail,
	sections,
	comment,
	setmeal
}