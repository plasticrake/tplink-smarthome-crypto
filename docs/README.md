
# tplink-smarthome-crypto

## Index

### Functions

* [decrypt](README.md#decrypt)
* [decryptWithHeader](README.md#decryptwithheader)
* [encrypt](README.md#encrypt)
* [encryptWithHeader](README.md#encryptwithheader)

## Functions

###  decrypt

▸ **decrypt**(`input`: Buffer, `firstKey`: number): *Buffer*

*Defined in [index.ts:50](https://github.com/plasticrake/tplink-smarthome-crypto/blob/8d7c48a/src/index.ts#L50)*

Decrypts input where each byte is XOR'd with the previous encrypted byte.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`input` | Buffer | - | Encrypted Buffer |
`firstKey` | number | 171 | Value to XOR first byte of input |

**Returns:** *Buffer*

decrypted buffer

___

###  decryptWithHeader

▸ **decryptWithHeader**(`input`: Buffer, `firstKey`: number): *Buffer*

*Defined in [index.ts:70](https://github.com/plasticrake/tplink-smarthome-crypto/blob/8d7c48a/src/index.ts#L70)*

Decrypts input that has a 4 byte big-endian length header;
each byte is XOR'd with the previous encrypted byte

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`input` | Buffer | - | Encrypted Buffer with header |
`firstKey` | number | 171 | Value to XOR first byte of input |

**Returns:** *Buffer*

decrypted buffer

___

###  encrypt

▸ **encrypt**(`input`: Buffer | string, `firstKey`: number): *Buffer*

*Defined in [index.ts:15](https://github.com/plasticrake/tplink-smarthome-crypto/blob/8d7c48a/src/index.ts#L15)*

Encrypts input where each byte is XOR'd with the previous encrypted byte.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`input` | Buffer &#124; string | - | Data to encrypt |
`firstKey` | number | 171 | Value to XOR first byte of input |

**Returns:** *Buffer*

encrypted buffer

___

###  encryptWithHeader

▸ **encryptWithHeader**(`input`: Buffer | string, `firstKey`: number): *Buffer*

*Defined in [index.ts:33](https://github.com/plasticrake/tplink-smarthome-crypto/blob/8d7c48a/src/index.ts#L33)*

Encrypts input that has a 4 byte big-endian length header;
each byte is XOR'd with the previous encrypted byte.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`input` | Buffer &#124; string | - | Data to encrypt |
`firstKey` | number | 171 | Value to XOR first byte of input |

**Returns:** *Buffer*

encrypted buffer with header
