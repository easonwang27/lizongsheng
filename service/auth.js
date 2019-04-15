// 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
export function wx_authSetting(oneScope) {
    return new Promise(resolve => {
        wx.getSetting({
            success(res) {
                if (!res.authSetting[oneScope]) {
                    wx.authorize({
                        scope: oneScope,
                        success() {
                            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                            resolve()
                        }
                    })
                }
            }
        })
    })
}


