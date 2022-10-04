// pages/login/login.js
import {
    getRequest,
    postRequest
} from '../../utils/http'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img: '',
        mobile:'',
        user_pass:'',
        captcha:'',
        key:'',
        a:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        getRequest('/app/getImgCode').then(res => {
            this.setData({
                img: res.data.url.img,
                key: res.data.url.key
            })
        })
    },
    // 刷新验证码
    gx() {
        console.log(1);
        getRequest('/app/getImgCode').then(res => {
            // console.log(res);
            this.setData({
                img: res.data.url.img
            })
        })
    },
    // 获取验证码
     // 手机号
     tel(e){
        console.log(e);
        this.setData({
            mobile:e.detail.value
        })
        console.log(this.data.mobile);
    },
    // 密码
    pwd(e){
        this.setData({
            user_pass:e.detail.value
        })
        console.log(this.data.user_pass);
    },
    // 验证码
    yzm(e){
        this.setData({
            captcha:e.detail.value
        })
        console.log(this.data.captcha);
    },
    // 获取验证码
    yzms(){
        postRequest('/app/getsmscode',{mobile:this.data.mobile,sms_type:"login"}).then(res=>{
            console.log(res);
            this.setData({
                a:6
            })
            console.log(this.data.a);
           var data=  setInterval(()=>{
                this.data.a--
                console.log(this.data.a);
                this.setData({
                    a:this.data.a
                })
                if(this.data.a==0){
                    clearInterval(data)
                }
            },1000)
        })
    },
    // 注册
    zcs(){
        console.log(1);
    },
    // 跳转密码登录
    pwd(){
        wx.navigateTo({
          url: '/pages/login/login',
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})