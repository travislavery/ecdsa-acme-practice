var fs = require('fs');
var EC = require('elliptic').ec
var KeyEncoder = require('key-encoder')

if (!fs.existsSync(__dirname + '/tests/account.privkey.pem')) {
  var ec = newEC()
  var keyPair = ec.genKeyPair();
  var keyEncoder = new KeyEncoder(newEncoderOptions(ec))
  var privKey = keyPair.getPrivate();
  console.log(keyPair);
  var priv = privKey.toString('hex')
  var pemPrivateKey = keyEncoder.encodePrivate(priv, 'raw', 'pem')
  console.log(pemPrivateKey);
  fs.writeFileSync(__dirname + '/tests/account.privkey.pem', pemPrivateKey);
}

if (!fs.existsSync(__dirname + '/tests/privkey.pem')) {
  var ec = newEC()
  var keyPair = ec.genKeyPair();
  var keyEncoder = new KeyEncoder(newEncoderOptions(ec))
  var privKey = keyPair.getPrivate();
  console.log(keyPair);
  var priv = privKey.toString('hex')
  var pemPrivateKey = keyEncoder.encodePrivate(priv, 'raw', 'pem')
  console.log(pemPrivateKey);
  fs.writeFileSync(__dirname + '/tests/privkey.pem', pemPrivateKey);
}

function newEncoderOptions(ec){
  return {
    curveParameters: [1, 3, 132, 0, 10],
    privatePEMOptions: {label: 'EC PRIVATE KEY'},
    publicPEMOptions: {label: 'PUBLIC KEY'},
    curve: ec
  }
}

function newEC(){
  return new EC('p256')
}