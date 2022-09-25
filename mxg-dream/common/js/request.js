// import { msg } from './util.js'

// // 基础URL
// // #ifndef H5
// // 非h5端，
// let BASE_URL = 'https://mock.mengxuegu.com/mock/5fdc6ffb5b350029c77c973a/mxg-education-app'
// // #endif

// // #ifdef H5
// // h5, 进行代理转发
// let BASE_URL = '/api' // 'http://39.108.187.100:6001'
// // #endif

// const request = (options = {}) => {
// 	// resolve 正常响应，reject异常响应
// 	return new Promise((resolve, reject) => {
// 		uni.request({
// 			url: BASE_URL + options.url,
// 			method: options.method || 'GET',
// 			data: options.data || {},
// 			timeout: 8000, // 8秒超时时间，单位ms
// 			success: (res) => {
// 				// console.log('res', res.data)
// 				resolve(res.data)
// 			},
// 			fail: (err) => {
// 				// console.log('err', err)
// 				msg('请求接口失败')
// 				reject(err)
// 			}
// 		})
// 	}) 
// }

// // 导出
// export default request
import axios from 'axios'

// 创建一个实例
const instance = axios.create({
    baseURL:'http://m.mengxuegu.com/api/',
    timeout:8000,//超时时间
})
// 请求拦截
instance.interceptors.request.use((config)=>{
	uni.showLoading({
		title:'拼命加载中...'
	})
    console.log('拦截成功');
    return config
},(err)=>{
	
    return Promise.reject(err)
})


// 响应拦截
instance.interceptors.response.use((res)=>{
    // console.log(res);//后端响应的数据
	uni.hideLoading()
    return res
},(err)=>{
    return Promise.reject(err)
})
export default instance