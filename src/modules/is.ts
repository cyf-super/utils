export function getType(variate: any) {
  return Object.prototype.toString.call(variate).slice(8, -1).toLowerCase()
}

export const isNumber = (variate: any) => getType(variate) === 'number'

export const isString = (variate: any) => getType(variate) === 'string'

export const isBoolean = (variate: any) => getType(variate) === 'boolean'

export const isNull = (variate: any) => getType(variate) === 'null'

export const isUndefined = (variate: any) => getType(variate) === 'undefined'

export const isArray = (variate: any) => getType(variate) === 'array'

export const isFunction = (variate: any) => getType(variate) === 'function'

export const isObject = (variate: any) => getType(variate) === 'object'

export const isSymbol = (variate: any) => getType(variate) === 'symbol'

export const isNaN = (variate: any) => Number.isNaN(variate)
