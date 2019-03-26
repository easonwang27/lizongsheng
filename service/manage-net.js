function post(url, data){

  wx.request({
    url,
    data,
    success(res) {
      debugger
      console.log(res.data)
      if(res.statusCode  === 200){
        Promise.resolve(res.data)
      }else{
        wx.showToast("歌曲接口异常")
      }
    }
  })
}

module.exports = {
  post
}
