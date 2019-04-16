// pages/components/authUserInfo/userInfo.js
//获取应用实例
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGotUserInfo(e) {
      console.log(e.detail.errMsg)
      console.log(e.detail.userInfo)
      console.log(e.detail.rawData)
      getApp().globalData.userInfo = e.detail.userInfo
    }
  }
})
