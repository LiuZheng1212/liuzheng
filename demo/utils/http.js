const commonUrl = "https://www.lexuemiao.com/api"

const getRequest = (url, data) => {
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

            }
        })
    })
}
const postRequest = (url, data) => {
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

            }
        })
    })
}



export {
    getRequest,
    postRequest
}