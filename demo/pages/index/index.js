// index.js
// 获取应用实例
const app = getApp();
import { postRequest, getRequest } from "../../utils/http.js";
Page({
    data: {
        navList: [], // 导航栏
        navId: 1, // 导航栏id
        banner: [] // 轮播图
    },
    // 事件处理函数
    bindViewTap() {},
    onLoad() {
        getRequest('/app/home/getSecondClassify/1?classify_id=1').then((res) => {
            if(res.code == 200) {
                this.setData({
                    navList:res.data
                })
            }
        })
        // 获取轮播图
        this.getBanner(1)
    },
    // 获取轮播图
    getBanner(id) {
        getRequest(`/app/home/banner/${id}/4`).then((res) => {
            console.log(res);
            this.setData({
                banner: res.data
            })
        })
    },
    selectNav(e) {
        // 获取轮播图
        this.getBanner(e.currentTarget.dataset.id)
        this.setData({
            navId: e.currentTarget.dataset.id
        })
    }
})