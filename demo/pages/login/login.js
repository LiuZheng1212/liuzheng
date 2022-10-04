// pages/login/login.js
import {getRequest,postRequest} from '../../utils/http'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img:'',
        mobile:'',
        user_pass:'',
        captcha:'',
        key:'',
        tx:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        getRequest('/app/getImgCode').then(res=>{
            this.setData({
                img:res.data.url.img,
                key:res.data.url.key
            })
        })
    },
    // 刷新验证码
    gx(){
        getRequest('/app/getImgCode').then(res=>{
            // console.log(res);
            this.setData({
                img:res.data.url.img
            })
        })
    },
    // 手机号
    tel(e){
        // console.log(e);
        this.setData({
            mobile:e.detail.value
        })
        // console.log(this.data.mobile);
    },
    // 密码
    pwd(e){
        this.setData({
            user_pass:e.detail.value
        })
    },
    // 验证码
    yzm(e){
        this.setData({
            captcha:e.detail.value
        })
    },
    // 登录
    login(){
        postRequest('/app/login',{
            captcha:this.data.captcha,
            mobile:this.data.mobile,
            user_pass:this.data.user_pass,
            key:this.data.key,
            device_id:'1',
            device_type:'2'
        }).then(res=>{
                wx.setStorage({
                    key:"user",
                    data:res.data
                  })
                if(res.code==200){
                    wx.switchTab({
                      url: '/pages/personal/personal',
                    })
                    wx.showToast({
                      title: res.msg,
                    })
                }else{
                    wx.showToast({
                      title: res.msg,
                    })
                }
        })
    },
    // 跳转注册页面
    zc(){
        wx.navigateTo({
          url: '/pages/logins/logins',
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