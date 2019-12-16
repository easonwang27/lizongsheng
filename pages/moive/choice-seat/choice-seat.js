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
            [0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],
            [1,0,0],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],
            [2,0,0],[2,1,0],[2,2,1],[2,3,1],[2,4,0],[2,5,0],[2,6,0],[2,7,1],[2,8,1],[2,9,0],
            [3,0,0],[3,1,0],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,0],[3,9,0],
            [4,0,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0],[4,5,0],[4,6,0],[4,7,0],[4,8,0],[4,9,0],
            [5,0,0],[5,1,0],[5,2,0],[5,3,0],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,0],[5,9,0],
            [6,0,0],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],
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
    // todo
    if(selectTicket.length> 6){
      wx.showToast({title: '最多购买6张'})
      return
    }

    this.setData({
      selectTicket
    })
  },
  delOne(event){
    let dataset = event.target.dataset
    let index = dataset.index 
    let selectTicket = this.data.selectTicket.splice(index, 1)
    this.setData({selectTicket})
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