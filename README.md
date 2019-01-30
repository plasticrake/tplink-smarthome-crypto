# tplink-smarthome-crypto

[![NPM Version](https://img.shields.io/npm/v/tplink-smarthome-crypto.svg)](https://www.npmjs.com/package/tplink-smarthome-crypto)
[![Build Status](https://travis-ci.org/plasticrake/tplink-smarthome-crypto.svg?branch=master)](https://travis-ci.org/plasticrake/tplink-smarthome-crypto)
[![codecov](https://codecov.io/gh/plasticrake/tplink-smarthome-crypto/branch/master/graph/badge.svg)](https://codecov.io/gh/plasticrake/tplink-smarthome-crypto)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

TP-Link Smarthome Crypto

## Supported Devices

| Model                                     | Type |
|-------------------------------------------|------|
| HS100, HS105, HS107, HS110,<br/>HS200, HS210, HS220, HS300 | Plug |
| LB100, LB110, LB120, LB130, LB200, LB230  | Bulb |

## Related Projects

* [TP-Link Smarthome API](https://github.com/plasticrake/tplink-smarthome-api)
* [TP-Link Smarthome Device Simulator](https://github.com/plasticrake/tplink-smarthome-simulator) - Useful for automated testing
* [TP-Link Smarthome Crypto](https://github.com/plasticrake/tplink-smarthome-crypto)
* [TP-Link Smarthome Homebridge Plugin](https://github.com/plasticrake/homebridge-tplink-smarthome)

## API

<a name="module_tplink-smarthome-crypto"></a>

## tplink-smarthome-crypto
TP-Link Smarthome Crypto

TCP communication includes a 4 byte header, UDP does not.


* [tplink-smarthome-crypto](#module_tplink-smarthome-crypto)
    * [.encrypt(input, [firstKey])](#module_tplink-smarthome-crypto.encrypt) ⇒ <code>Buffer</code>
    * [.encryptWithHeader(input, [firstKey])](#module_tplink-smarthome-crypto.encryptWithHeader) ⇒ <code>Buffer</code>
    * [.decrypt(input, [firstKey])](#module_tplink-smarthome-crypto.decrypt) ⇒ <code>Buffer</code>
    * [.decryptWithHeader(input, [firstKey])](#module_tplink-smarthome-crypto.decryptWithHeader) ⇒ <code>Buffer</code>

<a name="module_tplink-smarthome-crypto.encrypt"></a>

### tplink-smarthome-crypto.encrypt(input, [firstKey]) ⇒ <code>Buffer</code>
Encrypts input where each byte is XOR'd with the previous encrypted byte.

**Kind**: static method of [<code>tplink-smarthome-crypto</code>](#module_tplink-smarthome-crypto)  
**Returns**: <code>Buffer</code> - encrypted buffer  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| input | <code>Buffer</code> \| <code>string</code> |  | Buffer/string to encrypt |
| [firstKey] | <code>number</code> | <code>0xAB</code> |  |

<a name="module_tplink-smarthome-crypto.encryptWithHeader"></a>

### tplink-smarthome-crypto.encryptWithHeader(input, [firstKey]) ⇒ <code>Buffer</code>
Encrypts input that has a 4 byte big-endian length header;
each byte is XOR'd with the previous encrypted byte.

**Kind**: static method of [<code>tplink-smarthome-crypto</code>](#module_tplink-smarthome-crypto)  
**Returns**: <code>Buffer</code> - encrypted buffer with header  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| input | <code>Buffer</code> \| <code>string</code> |  | Buffer/string to encrypt |
| [firstKey] | <code>number</code> | <code>0xAB</code> |  |

<a name="module_tplink-smarthome-crypto.decrypt"></a>

### tplink-smarthome-crypto.decrypt(input, [firstKey]) ⇒ <code>Buffer</code>
Decrypts input where each byte is XOR'd with the previous encrypted byte.

**Kind**: static method of [<code>tplink-smarthome-crypto</code>](#module_tplink-smarthome-crypto)  
**Returns**: <code>Buffer</code> - decrypted buffer  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| input | <code>Buffer</code> |  | encrypted Buffer |
| [firstKey] | <code>number</code> | <code>0xAB</code> |  |

<a name="module_tplink-smarthome-crypto.decryptWithHeader"></a>

### tplink-smarthome-crypto.decryptWithHeader(input, [firstKey]) ⇒ <code>Buffer</code>
Decrypts input that has a 4 bype big-endian length header;
each byte is XOR'd with the previous encrypted byte

**Kind**: static method of [<code>tplink-smarthome-crypto</code>](#module_tplink-smarthome-crypto)  
**Returns**: <code>Buffer</code> - decrypted buffer  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| input | <code>Buffer</code> |  | encrypted Buffer with header |
| [firstKey] | <code>number</code> | <code>0xAB</code> |  |



## Credits

Thanks to George Georgovassilis and Thomas Baust for [figuring out the HS1XX encryption](https://blog.georgovassilis.com/2016/05/07/controlling-the-tp-link-hs100-wi-fi-smart-plug/).
