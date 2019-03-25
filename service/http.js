function post(url, data) {
  return new Promise((resolve, reject) => {
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
          //   wx.toast("接口异常")
          // }
          resolve(res.data)
        } else {
          wx.toast("网络异常")
        }
      }
    })
  })
}

function get(){
  // todo
}
module.exports = {
  post, get
}
