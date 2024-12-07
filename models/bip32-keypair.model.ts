import {
  Bip32PrivateKey,
  Bip32PublicKey,
} from "@emurgo/cardano-serialization-lib-asmjs";

export interface Bip32KeyPair {
  privateKey: Bip32PrivateKey;
  publicKey: Bip32PublicKey;
}
