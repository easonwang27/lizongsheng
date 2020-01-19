// pages/poem/poem-list.js
import { navTo, wxApi } from '../../../utils/wxApi'
import { PoemList } from '../../../utils/serviice/service'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poemList: [],

    allFlag: false,
  },
  getPoemList() {
    PoemList().then(res => {
      this.setData({
        poemList: res
      })
    })
  },
  goOnePoem(e){
    let {id, title} = e.currentTarget.dataset
    navTo('poem', {id, title})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPoemList()
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