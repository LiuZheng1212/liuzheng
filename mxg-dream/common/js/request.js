import axios from 'axios'
const instance = axios.create({
	// http://m.mengxuegu.com/api
    baseURL:'http://m.mengxuegu.com/api/',
    timeout:8000,//超时时间
})
// 请求拦截
instance.interceptors.request.use((config)=>{
    // console.log('拦截成功');
    return config
},(err)=>{
    return Promise.reject(err)
})
instance.interceptors.response.use((res)=>{
    // console.log(res);//后端响应的数据
    return res
},(err)=>{
    return Promise.reject(err)
})
export default instance