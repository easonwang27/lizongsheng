export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

export const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// zlz
export const getUrlObj = url => {
  if (!url) {
    console.log("url不能为空")
    return
  }
  let tmpArr = decodeURIComponent(url).split("?");
  let urlObj = {
    url: tmpArr[0],
    qs: {}
  }
  if (tmpArr[1]) {
    let qsArr = tmpArr[1].split("&");
    qsArr.forEach(item => {
      let oneQsArr = item.split("=")
      urlObj.qs[oneQsArr[0]] = oneQsArr[1]
    })
  }
  return urlObj
}

export const obj2qs = params => {
  let result = "?"
  for (let key in params) {
    result += key + "=" + params[key]+'&'
  }
  
  console.log(result.substr(0, result.length-1))
  return result.substr(0, result.length-1)
}