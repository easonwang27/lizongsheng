const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// zlz
const getUrlObj = url => {
  if(!url){
    console.log("url不能为空")
    return
  }
  let tmpArr = url.split("?");
  let urlObj = {
    url: tmpArr[0],
    qs: {}
  }
  if(tmpArr[1]){
    let qsArr = tmpArr[1].split("&");
    qsArr.forEach(item => {
      let oneQsArr = item.split("=")
      urlObj.qs[oneQsArr[0]] = oneQsArr[1]
    })
  }
  return urlObj
}

module.exports = {
  formatTime,
  getUrlObj,
}
