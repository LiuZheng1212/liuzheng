// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',
    info: {}
  },
  // 登录
  login() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  // 注册
  zc() {
    wx.navigateTo({
      url: '/pages/logins/logins',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},
  // 设置跳转
  setup() {
    if (!this.data.key) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/setup/setup',
      })
    }

  },
  // 跳转个人中心
  personal() {
    if (!this.data.key) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/personal/personal',
      })
    }

  },
  // 跳转订单
  dd() {
    if (!this.data.key) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/myOrder/myOrder',
      })
    }

  },
  // 兑换课程
  kc() {
    if (!this.data.key) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/studyCard/studyCard',
      })
    }

  },
  // 地址管理
  dz() {
    if (!this.data.key) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/address/address',
      })
    }

  },
  //  我的收藏
  sc() {
    if (!this.data.key) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/Collection/Collection',
      })

    }

  },
  // 我的会员
  hy() {
    if (!this.data.key) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/member/member',
      })
    }

  },
  // 我的优惠券
  yh() {
    if (!this.data.key) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/myQuan/myQuan',
      })
    }

  },
  // 我的消息
  xx() {
    if (!this.data.key) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/messageList/messageList',
      })
    }

  },
  // 问题反馈
  wt() {
    if (!this.data.key) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/question/question',
      })
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const this_ = this
    wx.getStorage({
      key: 'user',
      success(res) {
        this_.setData({
          key: res.data.remember_token,
          info: res.data
        })
      }
    })
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