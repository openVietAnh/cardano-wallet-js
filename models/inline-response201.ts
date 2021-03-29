/* tslint:disable */
/* eslint-disable */
/**
 * Cardano Wallet Backend API
 * <p align=\"right\"><img style=\"position: relative; top: -10em; margin-bottom: -12em;\" width=\"20%\" src=\"https://cardanodocs.com/img/cardano.png\"></img></p> 
 *
 * OpenAPI spec version: 2021.3.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface InlineResponse201
 */
export interface InlineResponse201 {
    /**
     * A unique identifier for the wallet
     * @type {string}
     * @memberof InlineResponse201
     */
    id: any;
    /**
     * Number of consecutive unused addresses allowed.  **IMPORTANT DISCLAIMER:** Using values other than `20` automatically makes your wallet invalid with regards to BIP-44 address discovery. It means that you **will not** be able to fully restore your wallet in a different software which is strictly following BIP-44.  Beside, using large gaps is **not recommended** as it may induce important performance degradations. Use at your own risks. 
     * @type {number}
     * @memberof InlineResponse201
     */
    address_pool_gap: any;
    /**
     * 
     * @type {WalletsBalance}
     * @memberof InlineResponse201
     */
    balance: any;
    /**
     * 
     * @type {WalletsAssets}
     * @memberof InlineResponse201
     */
    assets: any;
    /**
     * 
     * @type {WalletsDelegation}
     * @memberof InlineResponse201
     */
    delegation: any;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse201
     */
    name: any;
    /**
     * 
     * @type {WalletsPassphrase}
     * @memberof InlineResponse201
     */
    passphrase?: any;
    /**
     * 
     * @type {WalletsState}
     * @memberof InlineResponse201
     */
    state: any;
    /**
     * 
     * @type {WalletsTip}
     * @memberof InlineResponse201
     */
    tip: any;
}