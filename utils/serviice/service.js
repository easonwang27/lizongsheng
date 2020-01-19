import { showLoading, hideLoading, showToast } from '../wxApi.js'

// 集合映射
const collObj = {
    poem_title: "poem_title",
    poem_content: "poem_content",
}


/**
 * 
 * @param {集合名称} collectionName 
 * @param {参数} options 
 */
function db(collection, options = {}) {
    showLoading()
    return new Promise((resolve, reject) => {
        // 
        // 1. 获取数据库引用
        const db = wx.cloud.database()
        // 2. 构造查询语句
        // collection 方法获取一个集合的引用
        // where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
        // get 方法会触发网络请求，往数据库取数据
        let coll = db.collection(collObj[collection])
        
        let { where, field, orderBy, order, limit } = options
        // 数据库查询方法的封装
        if (where) {
            coll = coll.where(where)
        }
        if (field) {
            coll = coll.field(field)
        }
        if (orderBy && orderBy.length) {
            orderBy.forEach(item => {
                coll = coll.orderBy(item, order || 'desc')
            })
        }
        if (limit) {
            coll = coll.limit(limit)
        }
        coll.get({
            success: function (res) {
                console.log(res)
                hideLoading()
                // 成功
                if (res.errMsg.indexOf('ok') !== -1) {
                    let data = res.data
                    resolve(data)
                } else {
                    reject(res)
                    showToast('接口异常，请稍后重试')
                }
            },
            fail: function (err) {
                hideLoading()
                console.error(err)
                // showToast(err)
            }
        })
    })
}

// api接口约定大些字母开头
// 诗列表
export function PoemList() {
    return db("poem_title")
}

export function OnePoem(params) {
    const { id } = params
    let paramsF = { where: { id } }
    
    return db("poem_content", paramsF)
}



