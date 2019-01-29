/* eslint-env mocha */

'use strict';

const chai = require('chai');
const expect = chai.expect;

const { decrypt, decryptWithHeader, encrypt, encryptWithHeader } = require('../lib/');

const payloads = {
  setPowerStateOn: {
    plain: '{"system":{"set_relay_state":{"state":1}}}',
    encryptedBuf: Buffer.from('0PKB+Iv/mvfV75S2xaDUi/mc8JHot8Sw0aXA4tijgfKG55P21O7fot+i', 'base64'),
    encryptedBufWithHeader: Buffer.from('AAAAKtDygfiL/5r31e+UtsWg1Iv5nPCR6LfEsNGlwOLYo4HyhueT9tTu36Lfog==', 'base64')
  },
  setPowerStateOff: {
    plain: '{"system":{"set_relay_state":{"state":0}}}',
    encryptedBuf: Buffer.from('0PKB+Iv/mvfV75S2xaDUi/mc8JHot8Sw0aXA4tijgfKG55P21O7eo96j', 'base64'),
    encryptedBufWithHeader: Buffer.from('AAAAKtDygfiL/5r31e+UtsWg1Iv5nPCR6LfEsNGlwOLYo4HyhueT9tTu3qPeow==', 'base64')
  },
  getSysInfo: {
    plain: '{ "system":{ "get_sysinfo":null } }',
    encryptedBuf: Buffer.from('0PDSodir37rX9c+0lLbRtMCf7JXmj+GH6MrwnuuH68u2lus=', 'base64'),
    encryptedBufWithHeader: Buffer.from('AAAAI9Dw0qHYq9+61/XPtJS20bTAn+yV5o/hh+jK8J7rh+vLtpbr', 'base64')
  },
  getConsumption: {
    plain: '{ "emeter":{ "get_realtime":null } }',
    encryptedBuf: Buffer.from('0PDSt9q/y67c/sS/n73av8uU5oPijvqT/pu5g+2Y9Ji4xeWY', 'base64'),
    encryptedBufWithHeader: Buffer.from('AAAAJNDw0rfav8uu3P7Ev5+92r/LlOaD4o76k/6buYPtmPSYuMXlmA==', 'base64')
  },
  specialChars: {
    plain: 'right single quotation mark:’ left double quotation mark:“ right double quotation mark:” kissing cat face with closed eyes:😽',
    encryptedBuf: Buffer.from('2bDXv8vrmPGf+JTx0aDVus6v27Lds5P+n+2GvF7eR2cLbgh8XDhXIkAsSWkYbQJ2F2MKZQsrRidVPgTmZvraqMGmzrqa/pHkhuqPr96rxLDRpcyjze2A4ZP4wiCgPR12H2wfdhh/XzxdKQlvDm0IKF82QioKaQVqGXwYOF0kQTII+Gf/Qg==', 'base64'),
    encryptedBufWithHeader: Buffer.from('AAAAhdmw17/L65jxn/iU8dGg1brOr9uy3bOT/p/thrxe3kdnC24IfFw4VyJALElpGG0CdhdjCmULK0YnVT4E5mb62qjBps66mv6R5Ibqj6/eq8Sw0aXMo83tgOGT+MIgoD0ddh9sH3YYf188XSkJbw5tCChfNkIqCmkFahl8GDhdJEEyCPhn/0I=', 'base64')
  }
};

const inputs = [
  {
    name: 'null',
    value: null,
    throws: TypeError
  },
  {
    name: 'undefined',
    value: undefined,
    throws: TypeError
  },
  {
    name: 'NaN',
    value: NaN,
    throws: TypeError
  },
  {
    name: 'a blank string ("")',
    value: '',
    decrypt: {
      expected: Buffer.alloc(0)
    },
    decryptWithHeader: {
      expected: Buffer.alloc(0)
    },
    encrypt: {
      expected: Buffer.alloc(0)
    },
    encryptWithHeader: {
      expected: Buffer.alloc(4)
    }
  },
  {
    name: 'an empty array ([])',
    value: [],
    decrypt: {
      expected: Buffer.alloc(0)
    },
    decryptWithHeader: {
      expected: Buffer.alloc(0)
    },
    encrypt: {
      expected: Buffer.alloc(0)
    },
    encryptWithHeader: {
      expected: Buffer.alloc(4)
    }
  }

];

function setupTests (func, tests) {
  tests.forEach((test) => {
    setupTest(func, test);
  });
}
function setupTest (func, input) {
  const name = input.name;
  const value = input.value;
  const throws = input.throws;
  const expected = throws || input.expected || input[func.name].expected;

  it(`should ${throws ? 'throw ' + throws.name : 'return value'} when input is ${name}`, function () {
    if (throws) {
      return expect(() => { func(value); }).to.throw(throws);
    }
    expect(func(input.value)).to.eql(expected);
  });
}

describe('tplink-crypto', function () {
  describe('decrypt', function () {
    setupTests(decrypt, inputs);
  });
  describe('decryptWithHeader', function () {
    setupTests(decryptWithHeader, inputs);
  });
  describe('encrypt', function () {
    setupTests(encrypt, inputs);
  });
  describe('encryptWithHeader', function () {
    setupTests(encryptWithHeader, inputs);
  });

  Object.keys(payloads).forEach((plKey) => {
    const payload = payloads[plKey];

    describe('decrypt', function () {
      it(`should decrypt ${plKey} payload (Buffer)`, function () {
        expect(decrypt(payload.encryptedBuf).toString('utf8')).to.eql(payload.plain);
      });
    });

    describe('decryptWithHeader', function () {
      it(`should decrypt ${plKey} payload (Buffer)`, function () {
        expect(decryptWithHeader(payload.encryptedBufWithHeader).toString('utf8')).to.eql(payload.plain);
      });
    });

    describe('encrypt', function () {
      it(`should encrypt ${plKey} payload (string)`, function () {
        expect(encrypt(payload.plain)).to.eql(Buffer.from(payload.encryptedBuf, 'base64'));
      });
      it(`should encrypt ${plKey} payload (Buffer)`, function () {
        expect(encrypt(Buffer.from(payload.plain))).to.eql(Buffer.from(payload.encryptedBuf, 'base64'));
      });
    });

    describe('encryptWithHeader', function () {
      it(`should encrypt ${plKey} payload (string)`, function () {
        expect(encryptWithHeader(payload.plain)).to.eql(payload.encryptedBufWithHeader);
      });
      it(`should encrypt ${plKey} payload (Buffer)`, function () {
        expect(encryptWithHeader(Buffer.from(payload.plain))).to.eql(payload.encryptedBufWithHeader);
      });
    });

    describe('encrypt <-> decrypt', function () {
      it(`should encrypt ${plKey} payload and decrypt back to original (string)`, function () {
        const orig = payload.plain;
        expect(decrypt(encrypt(orig)).toString('utf8')).to.eql(orig);
      });
      it(`should decrypt ${plKey} payload and encrypt back to original (Buffer)`, function () {
        const origBuf = payload.encryptedBuf;
        expect(encrypt(decrypt(origBuf))).to.eql(origBuf);
      });
    });
  });
});
