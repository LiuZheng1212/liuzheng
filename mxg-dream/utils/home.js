import http from '@/common/js/request.js'
async function getBanner(){
    const {data} = await http.get('article/api/advert/show/1')
    return data   
}
async function getList(){
    const {data} = await http.get('article/api/category/label/list')
    return data   
}

async function getSerch(form){
    const {data} = await http.post(`course/api/course/search`,form)
    return data   
}
// 获取详情
async function getOk(form){
    const {data} = await http.post(`/course/api/course/search`,form)
    return data 
}
export {getBanner,getList,getSerch,getOk}