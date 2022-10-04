// pages/selcourse/selcourse.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navList: [
            {
                name: '精选',
                id: 1
            },
            {
                name: '考研英语',
                id: 2
            },
            {
                name: '考研政治',
                id: 3
            },
            {
                name: '实用英语',
                id: 4
            },
            {
                name: '考研数学',
                id: 5
            }
        ],
        currentId: 1
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    },

    changeNav(e) {
        console.log(e);
        this.setData({
            currentId: e.currentTarget.dataset.id
        })
        console.log(this.data.currentId);
    },
})