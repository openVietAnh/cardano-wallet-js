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
 * Next delegation status becomes active at the start of the second epoch after the corresponding delegation certificate was discovered. The exact moment is specified by changes_at
 * @export
 * @interface ApiWalletDelegationNext
 */
export interface ApiWalletDelegationNext {
    /**
     * 
     * @type {string}
     * @memberof ApiWalletDelegationNext
     */
    status: ApiWalletDelegationNextStatusEnum;
    /**
     * A unique Stake-Pool identifier (present only if status = `delegating`)
     * @type {string}
     * @memberof ApiWalletDelegationNext
     */
    target?: any;
    /**
     * 
     * @type {WalletsDelegationChangesAt}
     * @memberof ApiWalletDelegationNext
     */
    changes_at: any;
}

/**
    * @export
    * @enum {string}
    */
export enum ApiWalletDelegationNextStatusEnum {
    NotDelegating = 'not_delegating',
    Delegating = 'delegating'
}
