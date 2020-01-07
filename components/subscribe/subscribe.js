// components/subscribe/ddd.js
import { wxApi } from '../../utils/util'
const app = getApp()
// 订阅消息模板ID
const tmplIds = ['KIZc2VPceGgkGY2F9jaTgzv6GPeNtIawGsa-SHZr_D0']
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
    // 默认订阅 订阅引导组件不闪现
    subscribeMessage: true,
    setpage: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 订阅消息授权
    subscribePre() {
      wxApi("requestSubscribeMessage", { tmplIds: ['KIZc2VPceGgkGY2F9jaTgzv6GPeNtIawGsa-SHZr_D0'] }).then(res => {
        debugger
        console.log('申请订阅消息授权',res)
        let setpage = tmplIds.some(id =>
          res[id] == 'reject'
        )
        this.setData({
          setpage
        })
      }, rej => {
        // 兼容用户主动拒绝的情况
        console.log('授权失败', rej)
        let errCode = rej.errCode
        this.setData({
          setpage: true
        })
        if (errCode === 20004) {

        }
      })
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  pageLifetimes: {
    show: function () {
      this.setData({
        setpage: false
      })
      wxApi('getSetting', { 'withSubscriptions': true }).then(res => {
        console.log('订阅权限相关', res)
        debugger
        let authSetting = res.authSetting
        let subscriptionsSetting = res.subscriptionsSetting
        let subscribeMessage = authSetting['scope.subscribeMessage'] && tmplIds.every(id =>
          subscriptionsSetting[id] == 'accept'
        )
        console.log(subscribeMessage)
        this.setData({
          subscribeMessage
        })
      })
    },
  }
})
