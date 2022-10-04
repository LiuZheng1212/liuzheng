import { getRequest } from "../../utils/http";

// pages/bookdetail/bookdetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        askList:[] //评论
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    //    console.log(JSON.parse(decodeURIComponent(options.deval)));
       const val=JSON.parse(decodeURIComponent(options.deval))
       console.log(val);
       this.setData({
           list:val
       })
       console.log(this.data.list);
    //    评论
       getRequest(`/app/theme/commentList/${val.square_id}?dyna_id=${val.square_id}&page=1&limit=15`).then(res =>{
           console.log(res);
           this.setData({
               askList:res.data
           })
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