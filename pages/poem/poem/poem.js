// pages/poem/poem/poem.js
import { OnePoem } from '../../../utils/serviice/service'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poemTitle: "",
    poemContent: {},
  },
  getOnePoem(id) {
    OnePoem({id}).then(res => {
      
      this.setData({
        poemContent: res[0].content
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {id, title} = options
    
    this.setData({
      title
    })
    this.getOnePoem(id)
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