function createOverload() {
  const map = new Map()

  // 调用对应函数，根据传递的参数类型找到对应的函数
  function overload(...args) {
    const key = args.map(arg => getType(arg)).join(',')
    const fn = map.get(key)
    if (fn) {
      return fn.apply(null, args)
    }

    throw new Error('no match function!')
  }

  // 负责存储函数，key为参数类型
  overload.addImpl = function(...args) {
    const fn = args.pop()
    if (typeof fn !== 'function') return

    const types = args
    map.set(types.join(','), fn)
  }

  return overload
}

// 获取数据类型
function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

const getPerson = createOverload()

function person_0() {
	console.log('没有接收任何参数')
}

function person_1(name) {
	console.log(`我的名字叫${name}`)
}

function person_2(firstName, lastName) {
	console.log(`我姓${firstName}，名叫${lastName}`)
}

// 前面的参数为类型
getPerson.addImpl(person_0)
getPerson.addImpl('string', person_1)
getPerson.addImpl('string', 'string', person_2)

// 传递参数调用对应的方法

getPerson()  // 没有接收任何参数
getPerson('四')  // 我的名字叫四
getPerson('李', '四')  // 我姓李，名叫四