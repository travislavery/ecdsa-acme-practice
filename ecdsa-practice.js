var EC = require('elliptic').ec

var ec = new EC('p256')

var key = ec.genKeyPair();

var pubKey = key.getPublic();
var privKey = key.getPrivate();

var pub = pubKey.encode('hex');
var priv = privKey.toString('hex');

var getPubKey = ec.keyFromPublic(pub, 'hex');
var msgHash = [1, 3, 132, 0, 10];
var signature = key.sign(msgHash)
var derSign = signature.toDER();

function ecdsaJWKpublic (curve, pubPoint) {
	return {
		"kty": "EC",
		"crv": curve,
		"x": pubPoint.getX().toString('hex'),
		"y": pubPoint.getY().toString('hex'),
	}
}

////// TODO ///////
// function addSignature(obj){
// 	return {...obj, signature: derSign}
// }
console.log(ecdsaJWKpublic("P-256", pubKey))