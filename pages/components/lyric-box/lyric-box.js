// pages/components/lyric-box/lyric-box.js
const { getUrlObj } = require("../../../utils/util.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lyricUrl: String,
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

  },

  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached() {
    // 在组件实例进入页面节点树时执行
    debugger
    let that = this
    let urlObj = getUrlObj(this.data.lyricUrl);
    if(urlObj){
      wx.request({
        url: urlObj.url,
        data: urlObj.qs,
        success(res) {
          // 网络正常返回
          if (res.statusCode === 200) {
            // 借口正常返回
            // if (res.data && res.data.code == 0) {
            //   Promise.resolve(res.data)
            // } else {
            //   wx.showToast("接口异常")
            // }
            debugger
            that.setData({
              lyric: res.data
            })
          } else {
            wx.showToast("网络异常")
          }
        }
      })
    }
  },
  detached() {
    // 在组件实例被从页面节点树移除时执行
  },
})
