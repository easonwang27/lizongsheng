function post(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method: "POST",
      success(res) {
        // 网络正常返回
        if (res.statusCode === 200) {
          // 借口正常返回
          // if (res.data && res.data.code == 0) {
          //   Promise.resolve(res.data)
          // } else {
          //   wx.showToast("接口异常")
          // }
          resolve(res.data)
        } else {
          wx.showToast("网络异常")
        }
      }
    })
  })
}

function get(url, data) {
  return new Promise((resolve) => {
    wx.request({
      url,
      data,
      success(res) {
        // 网络正常返回
        if (res.statusCode === 200) {
          // 借口正常返回
          // if (res.data && res.data.code == 0) {
          //   Promise.resolve(res.data)
          // } else {
          //   wx.showToast("接口异常")
          // }
          resolve(res.data)
        } else {
          wx.showToast("网络异常")
        }
      }
    })
  })
}

module.exports = {
  post, get
}
