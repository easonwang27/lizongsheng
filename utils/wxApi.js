export function wxApi(api, params = {}) {
    return new Promise((resolve, reject) => {
        params.success = function(res){
            resolve(res)
        }
        params.fail = function(res){
            reject(res)
        }
        wx[api](params)
    })
}

export function showLoading() {
    wxApi('showLoading', { title: '加载中...'})
}