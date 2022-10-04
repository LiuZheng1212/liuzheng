// pages/huatiList/huatiList.js
import {
    getRequest,
    postRequest
} from '../../utils/http'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotList: [],
        hotList2: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        getRequest('/app/theme/hotList?page=1&limit=15', {
            page: 1,
            limit: 15
        }).then(res => {
            this.setData({
                hotList: res.data.splice(0, 5),
                hotList2: res.data
            })
        })
    },
    back() {
        wx.switchTab({
            url: '/pages/miaowu/miaowu',
        })
    },
    toHuatiDetails(e) {
        wx.navigateTo({
            url: `/pages/huatiDetails/huatiDetails?id=${e.currentTarget.dataset.id}`,
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})