# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0](https://github.com/plasticrake/tplink-smarthome-crypto/compare/v3.0.0...v4.0.0) (2022-07-11)

### ⚠ BREAKING CHANGES

- Minimum supported Node version is v14

### Features

- drop support for node < v14 ([e5dd256](https://github.com/plasticrake/tplink-smarthome-crypto/commit/e5dd256d568c37207070fdcdb5ccaa63fcd2bea1))
- improve types for decrypt and decryptWithHeader ([855b4b7](https://github.com/plasticrake/tplink-smarthome-crypto/commit/855b4b7b8fb5cb2df080fc9dc0581638e131139a))
- switch to github ci from travis ([#29](https://github.com/plasticrake/tplink-smarthome-crypto/issues/29)) ([3b09b00](https://github.com/plasticrake/tplink-smarthome-crypto/commit/3b09b005192ff3460ead1c92a40dbe64cf2274f7))
- use Buffer.subarray instead of deprecated Buffer.slice ([afc104a](https://github.com/plasticrake/tplink-smarthome-crypto/commit/afc104a76ebdc80d34297b8f90ab8a1d9d2130ca))

## [3.0.0](https://github.com/plasticrake/tplink-smarthome-crypto/compare/v2.0.0...v3.0.0) (2020-06-17)

### ⚠ BREAKING CHANGES

- requires minimum node version 10
- raise required minimum node to v8

### Features

- use typedoc instead of jsdoc ([#10](https://github.com/plasticrake/tplink-smarthome-crypto/issues/10)) ([5b54dfc](https://github.com/plasticrake/tplink-smarthome-crypto/commit/5b54dfc6ff48146c659b2e88d1765ca2be0a329c))

### Bug Fixes

- change ci node v6 to v8 ([3976263](https://github.com/plasticrake/tplink-smarthome-crypto/commit/397626323fba3f52b2191b40ab407fe76f887011))
- decryptWithHeader to use firstKey parameter ([5d0e719](https://github.com/plasticrake/tplink-smarthome-crypto/commit/5d0e719de225d5c47f2e2f1966fdf23fbe286885))

- require minimum node version 10 ([8d7c48a](https://github.com/plasticrake/tplink-smarthome-crypto/commit/8d7c48abf607b1daa61fa00f2a799775d1876950))
- Convert to typescript (#9) ([c8723a5](https://github.com/plasticrake/tplink-smarthome-crypto/commit/c8723a525b26b7f01bd13f7ac15640ae6db78b17)), closes [#9](https://github.com/plasticrake/tplink-smarthome-crypto/issues/9)

<a name="2.0.0"></a>

# [2.0.0](https://github.com/plasticrake/tplink-smarthome-crypto/compare/v1.0.0...v2.0.0) (2019-01-30)

### improvement

- use ES2015 syntax, bump minimum node version to v6 ([1c6e36c](https://github.com/plasticrake/tplink-smarthome-crypto/commit/1c6e36c))

### BREAKING CHANGES

- requires node version >= v6
