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
function encrypt (input, firstKey) {
  if (firstKey === undefined) firstKey = 0xAB;
  let buf = Buffer.from(input);
  let key = firstKey;
  for (var i = 0; i < buf.length; i++) {
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
function encryptWithHeader (input, firstKey) {
  if (firstKey === undefined) firstKey = 0xAB;
  let bufMsg = encrypt(input, firstKey);
  let bufLength = Buffer.alloc(4);
  bufLength.writeUInt32BE(bufMsg.length, 0);
  return Buffer.concat([bufLength, bufMsg], bufMsg.length + 4);
}
/**
 * Decrypts input where each byte is XOR'd with the previous encrypted byte.
 * @alias  module:tplink-smarthome-crypto.decrypt
 * @param  {Buffer} input           encrypted Buffer
 * @param  {number} [firstKey=0xAB]
 * @return {Buffer}                 decrypted buffer
 */
function decrypt (input, firstKey) {
  if (firstKey === undefined) firstKey = 0xAB;
  let buf = Buffer.from(input);
  let key = firstKey;
  let nextKey;
  for (var i = 0; i < buf.length; i++) {
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
function decryptWithHeader (input, firstKey) {
  if (firstKey === undefined) firstKey = 0xAB;
  return decrypt(Buffer.from(input).slice(4));
}

module.exports = {
  encrypt,
  encryptWithHeader,
  decrypt,
  decryptWithHeader
};
