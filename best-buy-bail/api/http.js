//默认地址
let baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1/'

const http = (options)=>{
	uni.showLoading({
		title:'正在玩命加载中。。。'
	})
	return new Promise((resolve, reject)=>{
			uni.request({
				url:baseUrl + options.url,  //传入地址
				method:options.method || "GET",  //传入请求方式如果不写 就默认get
				data:options.data || {}, //传入请求携带的参数
				success(res) {
					resolve(res.data)
				},
				fail(err) {
					reject(err)
				},
				complete() {
					uni.hideLoading()
				}
			})
			
	})
}

export default http