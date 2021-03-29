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
 * Currently active delegation status.
 * @export
 * @interface WalletsDelegationActive
 */
export interface WalletsDelegationActive {
    /**
     * 
     * @type {string}
     * @memberof WalletsDelegationActive
     */
    status: WalletsDelegationActiveStatusEnum;
    /**
     * A unique Stake-Pool identifier (present only if status = `delegating`)
     * @type {string}
     * @memberof WalletsDelegationActive
     */
    target?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum WalletsDelegationActiveStatusEnum {
    NotDelegating = 'not_delegating',
    Delegating = 'delegating'
}
