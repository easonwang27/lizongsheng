// pages/song-list.js
const { songListApi } = require("../../../service/api/song-list-api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: "songTab",

    likeSongList: [{
      name: "山丘",
    },{
      name: "问",
    },{
      name: "新写的旧歌",
    }],

    myStoryList: [{
      name: "晚婚",
      list: [{
        content: "思想和经济独立带来的落差，'我从来不想独身，却有预感晚婚'，我喜欢的人在哪里"
      }]
    },{
      name: "问",
      list: [{
        content: "keep real, 真实有力，‘如果女人 总是等到夜深 默默付出青春’"
      }]
    },{
      name: "新写的旧歌",
      list: [{
        content: "任何一句都是主题的一个切面，任何一句都能共情，任何一句拿出来都会口水，主观表达的魅力。'两个男人 极有可能终其一生只是长得像而已'"
      }]
    }],
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

  switchOne(event){
    debugger
    if(event.currentTarget.dataset.type == "song"){
      this.setData({
        activeTab: "songTab"
      })
    }else{
      this.setData({
        activeTab: "storyTab"
      })
    }
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