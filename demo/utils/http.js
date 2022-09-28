const commonUrl = "https://www.lexuemiao.com/api"

const getRequest = (url, data) => {
    wx.showLoading({
        title: '加载中...',
    })
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${commonUrl}${url}`,
            success(res) {
                resolve(res.data)
            },
            method: 'GET',
            data: data,
            fail(err) {
                reject(err)
            },
            complete() {
                wx.hideLoading({})
            }
        })
    })
}
const postRequest = (url, data) => {
    wx.showLoading({
        title: '加载中...',
    })
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${commonUrl}${url}`,
            success(res) {
                resolve(res.data)
            },
            method: 'POST',
            data: data,
            fail(err) {
                reject(err)
            },
            complete() {
                wx.hideLoading({})
            }
        })
    })
}



export {
    getRequest,
    postRequest
}