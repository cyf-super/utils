import { doCrypto, deCrypto, isEncrypted } from './crypto'

interface StorageDataType {
  value?: unknown
  timer?: number | string
}

if (!localStorage || !sessionStorage) {
  console.error('localStorage support is disabled!')
}

class MyStorage {
  storage: Storage
  private static instances: { [key: string]: MyStorage } = {}

  constructor(type: Storage) {
    this.storage = type
  }

  /**
   * 单例模式
   * @param type 
   * @returns 
   */
  static getInstance(type: Storage) {
    const typeStr = type.toString()
    if (!MyStorage.instances[typeStr]) {
      MyStorage.instances[typeStr] = new MyStorage(type)
    }

    return MyStorage.instances[typeStr]
  }

  get(key: string) {
    let content = this.storage.getItem(key);
    if (!content) return null

    // 解密
    if (isEncrypted(content)) {
      content = deCrypto(content)
    }

    const cacheobj = JSON.parse(content)
    // 先判断该值是否存在
    if (cacheobj) {
      // 判断是否过期
      if (cacheobj.timer && cacheobj.timer < new Date().getTime()) {
        this.removeKey(key);
        return null;
      }
      return cacheobj.value;
    }
    return null;
  }
	
  /**
   * set 缓存数据
   * 
   * @param key key值
   * @param value 缓存数据 
   * @param expire 存储时效性，单位：天，默认为永久性存储
   * @param crypto 是否进行加密，默认不加密
   */
  set({ key, value, expire, crypto = false }: { key: string, value: unknown, expire?: number, crypto?: boolean }) {
  
    let cacheobj: StorageDataType = {};
    cacheobj.value = value;

    // 是否永久性存储
    if (expire) {
      cacheobj.timer = expire * 24 * 60 * 60 * 1000 + new Date().getTime()
    }

    let cacheStr = JSON.stringify(cacheobj)
    // 是否加密
    if (crypto) {
      cacheStr = doCrypto(cacheStr) as string
    }

    this.storage.setItem(key, cacheStr);
  }

  /**
   * 清空缓存
   */
  clear() {
    this.storage.clear();
  }

  /**
   * 移除某个缓存
   * @param key key值
   */
  removeKey(key: string) {
    this.storage.removeItem(key);
  }
}


const LStorage = MyStorage.getInstance(localStorage)

const SStorage = MyStorage.getInstance(sessionStorage)

export { LStorage, SStorage }