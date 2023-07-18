import {
  encrypt,
  decrypt,
  SjclElGamalPublicKey,
  BitArray,
  SjclElGamalSecretKey,
  SjclCipherEncrypted,
} from 'sjcl'

const SECRET = 'secret_password'

/**
 * 加密
 * @param content 加密的内容
 * @param secret 密钥
 * @returns
 */
export function doCrypto(
  content: string,
  secret: string | BitArray | SjclElGamalPublicKey = SECRET
) {
  return encrypt(secret, content) as SjclCipherEncrypted | string
}

/**
 * 解密
 * @param ciphertext 加密数据
 * @param secret 密钥
 * @returns
 */
export function deCrypto(
  ciphertext: string,
  secret: string | BitArray | SjclElGamalSecretKey = SECRET
) {
  return decrypt(secret, ciphertext)
}

/**
 * 判断数据是否加密了
 * @param ciphertext
 * @returns
 */
export function isEncrypted(ciphertext: string) {
  return ciphertext.startsWith(`{"iv":"`)
}
