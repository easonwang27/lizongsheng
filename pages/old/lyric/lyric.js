// pages/lyric/lyric.js
const { getUrlObj } = require("../../../utils/util.js")
// 内部数据
let _data = {}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lyric: String,
  },
  _getLyric(){
    let that = this
    let urlObj = _data.lyricObj
    debugger
    return new Promise(function(resolve){
      wx.request({
        url: urlObj.url,
        data: urlObj.qs,
        success(res) {
          // 网络正常返回
          if (res.statusCode === 200) {
            resolve()
            that.setData({
              lyric: res.data
            })
          } else {
            wx.showToast("网络异常")
          }
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _data.lyricObj = getUrlObj(options.lyric)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this._getLyric().then(() => {
      wx.setNavigationBarTitle({
        title: '歌词页面'
      })

    });
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
    // 弹窗页直接分享的友好方式
    return {
      title: "年少不听李宗盛，听懂已到不惑年",
      path: "/pages/song-list/song-list",
      imageUrl: "/static/image/lizongsheng.jpg"
    }
  },
})