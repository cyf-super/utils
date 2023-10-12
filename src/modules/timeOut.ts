/**
 * 延时器
 * @param callback () => viod 回调函数
 * @param wait 时间
 * @returns 
 */
function onTimeout (callback: () => void, wait = 0) {
  const timeoutId = setTimeout(callback, wait)
  return () => clearTimeout(timeoutId)
}

/**
 * 定时器
 * @param callback () => viod 回调函数
 * @param wait  时间
 * @returns 
 */
function onInterval (callback: () => void, wait?: number) {
  const intervalId = setInterval(callback, wait)
  return () => clearInterval(intervalId)
}


export {
  onTimeout,
  onInterval
}