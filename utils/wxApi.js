import {obj2qs} from './util'

const pages = {
    poemList: '/pages/poem/poem-list/poem-list',
    poem: '/pages/poem/poem/poem',
}

/**
 * 微信方法的封装
 * @param {微信api} api 
 * @param {参数} params 
 */
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

export function hideLoading() {
    wxApi('hideLoading')
}

export function showToast(title) {
    wxApi('showToast', { title, icon: 'none'})
}

// 导航
export function navTo(urlKey, params = {}) {
    const url = pages[urlKey] + obj2qs(params)
    
    wxApi('navigateTo', { url})
}