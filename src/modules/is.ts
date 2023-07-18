export function getType(variate: unknown) {
  return Object.prototype.toString.call(variate).slice(8, -1).toLowerCase()
}

export const isNumber = (variate: unknown) => getType(variate) === 'number'

export const isString = (variate: unknown) => getType(variate) === 'string'

export const isBoolean = (variate: unknown) => getType(variate) === 'boolean'

export const isNull = (variate: unknown) => getType(variate) === 'null'

export const isUndefined = (variate: unknown) => getType(variate) === 'undefined'

export const isArray = (variate: unknown) => getType(variate) === 'array'

export const isFunction = (variate: unknown) => getType(variate) === 'function'

export const isObject = (variate: unknown) => getType(variate) === 'object'

export const isSymbol = (variate: unknown) => getType(variate) === 'symbol'

export const isNaN = (variate: unknown) => Number.isNaN(variate)
