import http from '@/common/js/request.js'

// 我的订单
async function order() {
	const {
		data
	} = await http.get('/pay/order/user/list')
	return data
}
// 我的余额
async function balance() {
	const {
		data
	} = await http.get('/pay/user/balance')
	return data
}

export {
	order,
	balance
}
