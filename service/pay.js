const prepay = require("./service/api/prepay.js")



function pay() {
    prepay.prePayApi(data, (res) => {
        wx.requestPayment({
            timeStamp: '',
            nonceStr: '',
            package: '',
            signType: 'MD5',
            paySign: '',
            success(res) { },
            fail(res) { }
        })
    }, (err) => {

    })
}

module.exports = {
    pay
}