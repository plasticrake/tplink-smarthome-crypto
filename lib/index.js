'use strict';
/**
 * TP-Link Smarthome Crypto
 *
 * TCP communication includes a 4 byte header, UDP does not.
 * @module tplink-smarthome-crypto
 */
/**
 * Encrypts input where each byte is XOR'd with the previous encrypted byte.
 * @alias  module:tplink-smarthome-crypto.encrypt
 * @param  {(Buffer|string)} input           Buffer/string to encrypt
 * @param  {number} [firstKey=0xAB]
 * @return {Buffer}                 encrypted buffer
 */
function encrypt (input, firstKey = 0xAB) {
  const buf = Buffer.from(input);
  let key = firstKey;
  for (let i = 0; i < buf.length; i++) {
    buf[i] = buf[i] ^ key;
    key = buf[i];
  }
  return buf;
}
/**
 * Encrypts input that has a 4 byte big-endian length header;
 * each byte is XOR'd with the previous encrypted byte.
 * @alias  module:tplink-smarthome-crypto.encryptWithHeader
 * @param  {(Buffer|string)} input           Buffer/string to encrypt
 * @param  {number} [firstKey=0xAB]
 * @return {Buffer}                 encrypted buffer with header
 */
function encryptWithHeader (input, firstKey = 0xAB) {
  const msgBuf = encrypt(input, firstKey);
  const outBuf = Buffer.alloc(msgBuf.length + 4);
  outBuf.writeUInt32BE(msgBuf.length, 0);
  msgBuf.copy(outBuf, 4);
  return outBuf;
}
/**
 * Decrypts input where each byte is XOR'd with the previous encrypted byte.
 * @alias  module:tplink-smarthome-crypto.decrypt
 * @param  {Buffer} input           encrypted Buffer
 * @param  {number} [firstKey=0xAB]
 * @return {Buffer}                 decrypted buffer
 */
function decrypt (input, firstKey = 0xAB) {
  const buf = Buffer.from(input);
  let key = firstKey;
  let nextKey;
  for (let i = 0; i < buf.length; i++) {
    nextKey = buf[i];
    buf[i] = buf[i] ^ key;
    key = nextKey;
  }
  return buf;
}
/**
 * Decrypts input that has a 4 bype big-endian length header;
 * each byte is XOR'd with the previous encrypted byte
 * @alias  module:tplink-smarthome-crypto.decryptWithHeader
 * @param  {Buffer} input           encrypted Buffer with header
 * @param  {number} [firstKey=0xAB]
 * @return {Buffer}                 decrypted buffer
 */
function decryptWithHeader (input, firstKey = 0xAB) {
  return decrypt(input.slice(4));
}

module.exports = {
  encrypt,
  encryptWithHeader,
  decrypt,
  decryptWithHeader
};
