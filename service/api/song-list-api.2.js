const { post } = require("../http.js")
let post_urls = {
    songList: "https://api.bzqll.com/music/tencent/search",
    lyric: "",
}
const methods = {}
// 批量生产接口

for (let url in post_urls) {
    methods[url + "Api"] = function () {
        return factoryApi.bind(null, post_urls[url], data, sucFn, failFn)
    }
}

// 生产接口公共方法
function factoryApi(url, data, sucFn, failFn) {
    post(url, data).then((res) => {
        sucFn && sucFn(res)
    }, rej => {
        failFn && failFn(rej)
    })
}

module.exports = methods