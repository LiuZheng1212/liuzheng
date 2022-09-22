
import axios from 'axios'
const http = axios.create({
  // 存放 公用的url路径的
  baseURL: 'http://m.mengxuegu.com/api/',
  // 设置网络请求超时时间
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})
// 请求拦截
http.interceptors.request.use(
  // 成功会走第一个参数
  (config) => {
    return config
  },
  // 如果发送请求失败 会走第二个参数
  (error) => Promise.reject(error)
)

//相应拦截
http.interceptors.response.use((con)=>{
	return con
},(err)=>{
	return Promise.reject(err)
})

export default http