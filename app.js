import { wxApi } from "./utils/util"
require('./utils/mixin/mixin.js')
//app.js

App({
  onLaunch: function () {
    wx.cloud.init()
  },
  onShow(){
    

  },
  globalData: {
    auth: {
      // 订阅消息
      subscribeMessage: false
    },
    userInfo: null
  }
})