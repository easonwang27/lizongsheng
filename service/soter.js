const AUTH_MODE = 'fingerPrint'

function startAuth(cb) {
  const startSoterAuthentication = () => {
    wx.startSoterAuthentication({
      requestAuthModes: [AUTH_MODE],
      challenge: 'test',
      authContent: '小程序示例',
      success: (res) => {
        // wx.showModal({
        //   title: '提示',
        //   content: res.resultJSON,
        // })
        console.log("获取指纹成功", res)
        cb.a = JSON.parse(res.resultJSON).fid
      },
      fail: (err) => {
        console.log("指纹认证失败", err)
        wx.showModal({
          title: '失败',
          content: '认证失败',
          showCancel: false
        })
      }
    })
  }

  const checkIsEnrolled = () => {
    wx.checkIsSoterEnrolledInDevice({
      checkAuthMode: AUTH_MODE,
      success: (res) => {
        console.log(res)
        if (parseInt(res.isEnrolled) <= 0) {
          wx.showModal({
            title: '错误',
            content: '您暂未录入指纹信息，请录入后重试',
            showCancel: false
          })
          return
        }
        
        startSoterAuthentication();
      },
      fail: (err) => {
        console.error(err)
      }
    })
  }

  wx.checkIsSupportSoterAuthentication({
    success: (res) => {
      console.log(res)
      wx.showModal({
        title: '录入的指纹信息',
        content: JSON.stringify(res),
        showCancel: false
      })
      return
      checkIsEnrolled()
    },
    fail: (err) => {
      console.log("您的设备不支持指纹识别", err)
      wx.showModal({
        title: '错误',
        content: '您的设备不支持指纹识别',
        showCancel: false
      })
    }
  })
}

module.exports = {
  startAuth
}