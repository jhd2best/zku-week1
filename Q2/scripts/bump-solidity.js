const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment

// replace Multiplier3Verifier with Groth16
let contentM3G = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumpedM3G = contentM3G.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumpedM3G = bumpedM3G.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumpedM3G);

// replace Multiplier3Verifier with PLONK
const verifierPlonkRegex = /contract PlonkVerifier/

let contentM3P = fs.readFileSync("./contracts/Multiplier3Verifier_plonk.sol", { encoding: 'utf-8' });
bumpedM3P = contentM3P.replace(verifierPlonkRegex, 'contract Multiplier3PlonkVerifier');

fs.writeFileSync("./contracts/Multiplier3Verifier_plonk.sol", bumpedM3P);