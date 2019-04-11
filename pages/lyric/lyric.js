// pages/lyric/lyric.js

// 内部数据
let _data = {
  lyricUrl: ""
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lyric: String,
  },
  _getLyric(){
    let that = this
    wx.request({
      url: _data.lyricUrl,
      success(res) {
        // 网络正常返回
        if (res.statusCode === 200) {
          that.setData({
            lyric: res.data
          })
        } else {
          wx.showToast("网络异常")
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    debugger
    _data.lyricUrl = options.lyric
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  async onReady: function () {
    await this._getLyric();
    wx.setNavigationBarTitle({
      title: '歌词页面'
    })
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