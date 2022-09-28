import http from '@/common/js/request.js'

// 获取验证码
async function getCode(mobile){
	const { data } = await http.post('/system/sms/code', {
		mobile,
		templateCode: "MSM_1999123123"
	})
	return data
}

// 登录
async function getUser(obj) {
	const { data } = await http.post('/auth/login', {
		code: obj.code,
		mobile: obj.mobile
	})
	return data
}

// 我的学习
async function study() {
	const { data } = await http.get('/course/course/study/list')
	return data
}

export {
	getCode,
	getUser,
	study
}