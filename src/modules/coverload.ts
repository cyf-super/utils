import { getType, isFunction } from './is'


/**
 * 函数重载
 * @returns 
 */
export function createOverload() {
  const map: Map<string, Function> = new Map()

  // 调用对应函数，根据传递的参数类型找到对应的函数
  function overload(...args: any[]) {
    const key = args.map(arg => getType(arg)).join(',')
    const fn = map.get(key)
    if (fn) {
      return fn.apply(null, args)
    }

    throw new Error('no match function!')
  }

  // 负责存储函数，key为参数类型
  overload.addImpl = function(...args: [...any[], Function]) {
    const fn = args.pop()
    if (!isFunction(fn)) return

    const types = args
    map.set(types.join(','), fn)
  }

  return overload
}
