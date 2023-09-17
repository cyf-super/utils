interface CacheType {
    [key: string | symbol]: any
}

type KeyType = string | symbol

export class LRUCache {
  maxSize: number
  list:  KeyType[]
  cache:  CacheType
  constructor(maxSize = 10) {
      // 自定义缓存的长度
      this.maxSize = maxSize
      this.list = []   // 标识资源的访问
      this.cache = {}  // 缓存资源
  }

  // 获取数据
  get(key: KeyType) {
      if (this.cache[key]) {
          this.active(key)
          return this.cache[key]
      }
      return undefined
  }
  
  // 修改资源的活动级别
  active(key: KeyType) {
      // 先删除，将其添加到
      let index = this.list.indexOf(key)
      if (index !== -1) {
          this.list.splice(index , 1)
      }
      this.list.push(key)
  }

  // 存储数据
  set(key: KeyType, value: any) {
      // 如果该缓存已存在，那就修改它的value和位置即可
      if (this.cache[key]) {
          this.active(key)
          this.cache[key] = value
          return
      }

      // 如果即将超过内存了
      if (this.list.length >= this.maxSize) {
          // 删除最前一个 并删除其在缓存中的值
          const lastest = this.list.shift() as KeyType
          delete this.cache[lastest]
      }
      // 写入缓存
      this.cache[key] = value
      this.list.push(key)
  }
}