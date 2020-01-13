// 集合映射
const collObj = {
    poemList: 'poem-title',
    poemOne: 'poem-content',
}

// 数据库公方
function dbQry(collectionName) {
    showLoading()
    return new Promise((resolve, reject) => {
        // 1. 获取数据库引用
        const db = wx.cloud.database()
        // 2. 构造查询语句
        // collection 方法获取一个集合的引用
        // where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
        // get 方法会触发网络请求，往数据库取数据
        db.collection(collectionName)
            .get({
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
function db(collectionName, options) {
    showLoading()
    return new Promise((resolve, reject) => {
        // 
        const { id } = params
        // 1. 获取数据库引用
        const db = wx.cloud.database()
        // 2. 构造查询语句
        // collection 方法获取一个集合的引用
        // where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
        // get 方法会触发网络请求，往数据库取数据
        const coll = db.collection(collectionName)
        const { where, field, orderBy, order, limit } = options
        // 数据库查询方法的封装
        if (where) {
            coll = coll.where(where)
        }
        if (field) {
            coll = coll.field(field)
        }
        if (orderBy.length) {
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

// api接口约定大些字母开头
// 诗列表
export function PoemList() {
    const collName = collObj.poemList
    return dbQry(collName)
}

export function OnePoem(params) {
    const collName = collObj.poemList
    return dbQryBy(collName, params)
}



