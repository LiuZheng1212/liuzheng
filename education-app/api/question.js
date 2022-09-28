import http from '@/common/js/request.js'

// 热门回答
async function answer(obj) {
	const {
		data
	} = await http.post('/question/api/question/hot', {
		current: obj.page,
		size: obj.pageSize
	})
	return data
}

async function challenge(obj) {
	const {
		data
	} = await http.post('/question/api/question/new', {
		current: obj.page,
		size: obj.pageSize
	})
	return data
}

async function answers(obj) {
	const {
		data
	} = await http.post('/question/api/question/wait', {
		current: obj.page,
		size: obj.pageSize
	})
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

export {
	answer,
	challenge,
	answers,
	ask,
	askcomment
}
