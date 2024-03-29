/**
 * TP-Link Smarthome Crypto
 *
 * TCP communication includes a 4 byte header, UDP does not.
 * @packageDocumentation
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Encrypts input where each byte is XOR'd with the previous encrypted byte.
 *
 * @param input - Data to encrypt
 * @param firstKey - Value to XOR first byte of input
 * @returns encrypted buffer
 */
export function encrypt(input: Buffer | string, firstKey = 0xab): Buffer {
  const buf = Buffer.from(input);
  let key = firstKey;
  for (let i = 0; i < buf.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    buf[i] ^= key;
    key = buf[i];
  }
  return buf;
}
/**
 * Encrypts input that has a 4 byte big-endian length header;
 * each byte is XOR'd with the previous encrypted byte.
 *
 * @param input - Data to encrypt
 * @param firstKey - Value to XOR first byte of input
 * @returns encrypted buffer with header
 */
export function encryptWithHeader(
  input: Buffer | string,
  firstKey = 0xab
): Buffer {
  const msgBuf = encrypt(input, firstKey);
  const outBuf = Buffer.alloc(msgBuf.length + 4);
  outBuf.writeUInt32BE(msgBuf.length, 0);
  msgBuf.copy(outBuf, 4);
  return outBuf;
}
/**
 * Decrypts input where each byte is XOR'd with the previous encrypted byte.
 *
 * @param input - Encrypted Buffer
 * @param firstKey - Value to XOR first byte of input
 * @returns decrypted buffer
 */
export function decrypt(
  input: Buffer | string | Array<any>,
  firstKey = 0xab
): Buffer {
  const buf = Buffer.from(input);
  let key = firstKey;
  for (let i = 0; i < buf.length; i += 1) {
    const nextKey = buf[i];
    // eslint-disable-next-line no-bitwise
    buf[i] ^= key;
    key = nextKey;
  }
  return buf;
}
/**
 * Decrypts input that has a 4 byte big-endian length header;
 * each byte is XOR'd with the previous encrypted byte
 *
 * @param input - Encrypted Buffer with header
 * @param firstKey - Value to XOR first byte of input
 * @returns decrypted buffer
 */
export function decryptWithHeader(
  input: Buffer | string | Array<any>,
  firstKey = 0xab
): Buffer {
  if (input instanceof Buffer) return decrypt(input.subarray(4), firstKey);
  return decrypt(input.slice(4), firstKey);
}
