// pages/moive/choice-seat/choice-seat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // cinemaName:"",
    // name: "",
    // endTime:"",
    // type:"",
    // price: "",
    // room: "",
    cinemaName:"奥兰环球影城（望京店）",
    name: "功夫熊猫",
    endTime:"17:40",
    type:"原版3D",
    price: "4080",
    room: "5号厅(60帧激光厅)",
    // [row,col,isSelected]
    // 第一排第一列已被选
    // [0,0,0]
    seats: [
            [0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],
            [1,0,0],[1,1,0],[1,2,0],[1,3,0],[1,4,0],
            [2,0,0],[2,1,0],[2,2,1],[2,3,1],[2,4,0],
            [3,0,0],[3,1,0],[3,2,0],[3,3,0],[3,4,0],
            [4,0,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0],
           ],
           selectTicket: [],
  },
  choiceSeat(event){
    let dataset = event.target.dataset
    let index = dataset.index
    let val = dataset.val
    // 不可选
    if(val === 1){
      return
    }
    let key = 'seats.['+index+'][2]'
    this.setData({
      [key]: val === 0 ? 2 : 0
    })
    let seats = this.data.seats
    let selectTicket = []
    seats.forEach(item => {
      // debugger

      if(item[2] === 2){
        selectTicket.push(item)
      }
    })

    this.setData({
      selectTicket
    })
  },
  goOrderConfirm(){
    // let params = this._genQs(paramsObj)
    let url = "/pages/moive/order-confirm/order-confirm"
    wx.navigateTo({
      url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData(options)
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