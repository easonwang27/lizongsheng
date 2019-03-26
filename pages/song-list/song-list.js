// pages/song-list.js
const { songListApi } = require("../../service/api/song-list-api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList: [],
    lyricFlag: false,
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
    this.setData({
      lyric: event.target.dataset.lyric,
      lyricFlag: true
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

  }
})