const { get } = require("../http.js")
let urls = {
    songList: "https://api.bzqll.com/music/tencent/search",
    lyric: "",
}


// 生产接口公共方法
function songListApi(data, sucFn, failFn) {
    get(urls.songList, data).then((res) => {
        sucFn && sucFn(res)
    }, rej => {
        failFn && failFn(rej)
    })
}

module.exports = {
    songListApi
}