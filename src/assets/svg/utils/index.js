export default function styleStrToObject(styleStr) {
  const styleObj = {}
  const arr = styleStr.split(';')
  const reg = /-.?/
  arr.forEach(v => {
    if (!v) return
    const arr2 = v.split(':')
    let key = arr2[0].trim()
    const replaceStr = reg.exec(key)?.[0]
    if (replaceStr) {
      key = key.replace(replaceStr, replaceStr[1].toLocaleUpperCase())
    }
    const value = arr2[1].trim()
    styleObj[key] = value
  })

  return styleObj
}