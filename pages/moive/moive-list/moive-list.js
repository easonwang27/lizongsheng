// pages/moive/moive-list/moive-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cinema: {
      name: "奥兰环球影城（望京店）",
      location: "朝阳区来广营西路5号院诚盈中心商业街"
    },
    posters: [
      {
        schedule: [{
          beginTime: "15:40",
          endTime: "17:40",
          type: "原版3D",
          room: "5号厅(60帧激光厅)",
          price: 4080
        }],
        duration: "120",
        type: "动作",
        actor: ['道恩·强森', '凯伦·吉兰'],
        grade: 7.9,
        name: "功夫熊猫",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575972845979&di=1733141893d6881981a150b421c66461&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe21204e6a5460b4b8428e334bd8712ce11027c1faac6-wDFiPd_fw658"
      },
      {
        schedule: [{
          beginTime: "15:40",
          endTime: "17:40",
          type: "原版3D",
          room: "5号厅(60帧激光厅)",
          price: 4080
        }],
        duration: "120",
        type: "动作",
        actor: ['道恩·强森', '凯伦·吉兰'],
        grade: 7.9,
        name: "sinister",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576567660&di=9f2da50bf53d5cad34eae75983929476&imgtype=jpg&er=1&src=http%3A%2F%2Fimage13.m1905.cn%2Fuploadfile%2F2015%2F0325%2F20150325023802284318.jpg"
      },
      {
        schedule: [{
          beginTime: "15:40",
          endTime: "17:40",
          type: "原版3D",
          room: "5号厅(60帧激光厅)",
          price: 4080
        }],
        duration: "120",
        type: "动作",
        actor: ['道恩·强森', '凯伦·吉兰'],
        grade: 7.9,
        name: "敢死队",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575972961306&di=9e776e1a515e051fb688c786d2d92487&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff1e26cd00d3f917b9cf81f8651e822a3b0638f789bdd-POCYRb_fw658"
      },
      {
        schedule: [{
          beginTime: "15:40",
          endTime: "17:40",
          type: "原版3D",
          room: "5号厅(60帧激光厅)",
          price: 4080
        }],
        duration: "120",
        type: "动作",
        actor: ['道恩·强森', '凯伦·吉兰'],
        grade: 7.9,
        name: "哈利波特",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575972985921&di=55dc741c52956600b4450affc65f2841&imgtype=0&src=http%3A%2F%2Fwww.rjzxw.com%2Fdats%2Ftwjc%2F7%2F11875%2F11875-2.jpg"
      },
    ],
    dates: [{
      alias: "今天",
      date: "12月10日",
    }, {
      alias: "明天",
      date: "12月11日",
    }, {
      alias: "后天",
      date: "12月12日",
    }, {
      alias: "周五",
      date: "12月13日",
    }],
    currentIndex: 0,
    curPoster: {},
    actors: ""
  },
  /* 这里实现控制中间凸显图片的样式 */
  handleChange(e) {
    let currentIndex = e.detail.current
    this.setData({
      currentIndex,
      curPoster: this.data.posters[currentIndex],
      actors: this.data.posters[currentIndex].actor.join(',')
    })
  },
  _genQs(paramsObj){
    let res = "?"
    for(let key in paramsObj){
      res+=key+"="+paramsObj[key]+'&'
    }
    return res || ''
  },
  goChoiceSeats(event) {
    let dataset = event.target.dataset
    let index = dataset.index
    let item = dataset.item
    let cinemaName = this.data.cinema.name
    let name = this.data.posters[index].name
    let {endTime, type, price, room} = item
    let paramsObj = {
      cinemaName,
      name,
      endTime,
      type,
      price,
      room,
    }
    let params = this._genQs(paramsObj)
    let url = "/pages/moive/choice-seat/choice-seat" + params
    wx.navigateTo({
      url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      curPoster: this.data.posters[0],
      actors: this.data.posters[0].actor.join(',')
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