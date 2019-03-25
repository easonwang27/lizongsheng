const { post } = require("../http.js")
const urls = {
    songList: "https://api.bzqll.com/music/tencent/search",
}


function songListApi(data, sucFn, failFn) {
    post(urls.songList, data).then((res) => {
        sucFn && sucFn(res)
    }, rej => {
        failFn && failFn(rej)
    })
}
module.exports = {
    songListApi
}