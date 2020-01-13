import { wxApi } from "./utils/util"

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