import { wxApi, showLoading } from './wxApi'
export function dbQry() {
    showLoading()
    return new Promise((resolve, reject) => {
        // 1. 获取数据库引用
        const db = wx.cloud.database()
        // 2. 构造查询语句
        // collection 方法获取一个集合的引用
        // where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
        // get 方法会触发网络请求，往数据库取数据
        db.collection('poem-title').get({
            success: function (res) {
                console.log(res)
                wxApi('hideLoading')
                // 成功
                if (res.errMsg.indexOf('ok') !== -1) {
                    let data = res.data
                    resolve(data)
                } else {
                    reject(res)
                }
            }
        })
    })
}