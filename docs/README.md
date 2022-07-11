# tplink-smarthome-crypto

TP-Link Smarthome Crypto

TCP communication includes a 4 byte header, UDP does not.

## Table of contents

### Functions

- [decrypt](README.md#decrypt)
- [decryptWithHeader](README.md#decryptwithheader)
- [encrypt](README.md#encrypt)
- [encryptWithHeader](README.md#encryptwithheader)

## Functions

### decrypt

▸ **decrypt**(`input`, `firstKey?`): `Buffer`

Decrypts input where each byte is XOR'd with the previous encrypted byte.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` \| `any`[] \| `Buffer` | `undefined` | Encrypted Buffer |
| `firstKey` | `number` | `0xab` | Value to XOR first byte of input |

#### Returns

`Buffer`

decrypted buffer

___

### decryptWithHeader

▸ **decryptWithHeader**(`input`, `firstKey?`): `Buffer`

Decrypts input that has a 4 byte big-endian length header;
each byte is XOR'd with the previous encrypted byte

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` \| `any`[] \| `Buffer` | `undefined` | Encrypted Buffer with header |
| `firstKey` | `number` | `0xab` | Value to XOR first byte of input |

#### Returns

`Buffer`

decrypted buffer

___

### encrypt

▸ **encrypt**(`input`, `firstKey?`): `Buffer`

Encrypts input where each byte is XOR'd with the previous encrypted byte.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` \| `Buffer` | `undefined` | Data to encrypt |
| `firstKey` | `number` | `0xab` | Value to XOR first byte of input |

#### Returns

`Buffer`

encrypted buffer

___

### encryptWithHeader

▸ **encryptWithHeader**(`input`, `firstKey?`): `Buffer`

Encrypts input that has a 4 byte big-endian length header;
each byte is XOR'd with the previous encrypted byte.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` \| `Buffer` | `undefined` | Data to encrypt |
| `firstKey` | `number` | `0xab` | Value to XOR first byte of input |

#### Returns

`Buffer`

encrypted buffer with header
