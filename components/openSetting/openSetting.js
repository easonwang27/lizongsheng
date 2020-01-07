// components/openSetting/openSetting.js
import {wxApi} from '../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    setpage: Boolean
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
    openSetting(){
      wxApi('openSetting')
    }
  }
})
