// index.js
import {
    postRequest,
    getRequest
} from "../../utils/http.js";
Page({
    data: {
        navList: [], // 导航栏
        navId: 1, // 导航栏id
        banner: [], // 轮播图
        navTitle: {}, // 导航左边标题
        firShow: false, // fir第一个弹窗状态
        firstClassify: [], // 全部分类
        firId: null, // 第一个弹框id
        secTitle: null, // 第二个弹框title
        secShow: false, // sec第二个弹窗状态
        lastShow: false, // last第三个弹窗状态
        lastList: [], // 考试专业
        secId: null,
        LastId: null,
        todayList: [], // 今日直播
        courseList: [], // 免费直播课
        config: {} // 获取考验时间
    },
    // 事件处理函数
    bindViewTap() {},
    onLoad() {
        getRequest('/app/home/getSecondClassify/1?classify_id=1').then((res) => {
            if (res.code == 200) {
                this.setData({
                    navList: res.data
                })
            }
        })
        getRequest('/app/home/exam/1').then(res => {
            // console.log(res.data);
            this.setData({
                navTitle: res.data
            })
        })
        // 获取轮播图
        this.getBanner(1)
        // 获取今日直播
        getRequest('/app/home/liveToday/:classify_id').then(res => {
            this.setData({
                todayList: res.data
            })
        })
        getRequest('/app/home/marketingCourse/1?classify_id=1').then(res => {
            console.log(res);
            this.setData({
                courseList: res.data
            })
        })
        getRequest('/app/home/operateConfig').then(res => {
            this.setData({
                config: res.data
            })
        })
    },
    // last完成
    complete() {
        getRequest(`/app/home/exam/${this.data.firId}`).then(res => {
            // console.log(res.data);
            this.setData({
                LastId: null,
                secId: null,
                navTitle: res.data,
                lastShow: false
            })
        })
    },
    // last选中高亮
    selectLast(e) {
        this.setData({
            LastId: e.currentTarget.dataset.id
        })
    },
    // 打开第三个弹框 关闭第二个弹框
    openLast(e) {
        this.setData({
            lastShow: true,
            secShow: false,
            secId: e.currentTarget.dataset.id
        })
    },
    // 返回 fir 关闭 sec
    backFir() {
        this.setData({
            secId: null,
            firShow: true,
            secShow: false    
        })
    },
    // 返回 sec 关闭 last
    backSec() {
        this.setData({
            LastId: null,
            lastShow: false,
            secShow: true
        })
    },
    // 打开第二个弹框 关闭第一个弹框 选择考试科门 获取科门下数据
    openSec(e) {
        const {
            id
        } = e.currentTarget.dataset
        getRequest(`/app/home/getMajor/${id}?classify_id=${id}`).then(res => {
            this.setData({
                lastList: res.data
            })
        })
        this.setData({
            firShow: false,
            secShow: true,
            secTitle: e.currentTarget.dataset.title,
            firId: e.currentTarget.dataset.id
        })
    },

    // 打开fir弹框
    openFirShow(e) {
        getRequest('/app/home/getFirstClassify').then(res => {
            this.setData({
                firstClassify: res.data
            })
        })
        this.setData({
            firShow: true,
            firId: e.currentTarget.dataset.id
        })
    },
    // 关闭弹框
    onClose() {
        this.setData({
            firShow: false,
            secShow: false,
            lastShow: false
        })
    },
    // 获取轮播图
    getBanner(id) {
        getRequest(`/app/home/banner/${id}/${this.data.navTitle.id ? this.data.navTitle.id : 1}`).then((res) => {
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