const { get } = require("../http.js")
let urls = {
    prePay: "https://api.bzqll.com/music/tencent/search",
}


// 生产接口公共方法
function prePayApi(data, sucFn, failFn) {
    get(urls.prePay, data).then((res) => {
        sucFn && sucFn(res)
    }, rej => {
        failFn && failFn(rej)
    })
}

module.exports = {
    prePayApi
}