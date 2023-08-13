import { getType, isFunction } from './is'

type MapValue = (...args: unknown[]) => unknown

/**
 * 函数重载
 * @returns
 */
export function createOverload() {
  const map: Map<string, MapValue> = new Map()

  // 调用对应函数，根据传递的参数类型找到对应的函数
  function overload(...args: unknown[]) {
    const key = args.map(arg => getType(arg)).join(',')
    const fn = map.get(key)
    if (fn) {
      return fn(...args)
    }

    throw new Error('no match function!')
  }

  // 负责存储函数，key为参数类型
  overload.addImpl = function (...args: [...unknown[]]) {
    const fn = args.pop() as MapValue
    if (!isFunction(fn)) return

    const types = args
    map.set(types.join(','), fn)
  }

  return overload
}
