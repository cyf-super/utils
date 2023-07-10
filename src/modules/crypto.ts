import CryptoJS from "crypto-js";


/**
 * 加密
 * @param content 加密的内容
 * @param secret 密钥
 * @returns 
 */
export function doCrypto(content: string | CryptoJS.lib.WordArray, secret: string = 'secret key abc123') {
  return CryptoJS.AES.encrypt(content, secret).toString()
}

/**
 * 解密
 * @param ciphertext 加密数据
 * @param secret 密钥
 * @returns 
 */
export function deCrypto(ciphertext: string, secret: string = 'secret key abc123') {
  const bytes  = CryptoJS.AES.decrypt(ciphertext, secret);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);

  return originalText
}

/**
 * 判断数据是否加密了
 * @param ciphertext 
 * @returns 
 */
export function isEncrypted(ciphertext: string) {
  return ciphertext.startsWith("U2FsdGVkX1");
}