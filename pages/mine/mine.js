// pages/song-list.js
const { songListApi } = require("../../service/api/song-list-api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList: [],
    lyric: "",
    
  },

  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  // 业务api
  songList() {
    let params = {
      key: 579621905,
      s: "李宗盛",
      limit: 100,
      offset: 0,
      type: "song",
    }
    songListApi(params, (res) => {
      // debugger
      if(res && res.code === 200){
        this.setData({
          songList: res.data
        })  
      }
    }, (res) => {
      debugger
    })
  },
  goLrc(event) {
    debugger
    let lyric = encodeURIComponent(event.target.dataset.lyric)
    wx.navigateTo({
      url: `/pages/lyric/lyric?lyric=${lyric}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.songList()
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
    // 弹窗页直接分享的友好方式
    return {
      title: "年少不听李宗盛，听懂已到不惑年",
      path: "/pages/song-list/song-list",
      imageUrl: "/static/image/lizongsheng.jpg"
    }
  },
})