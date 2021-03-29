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

import { WalletsDelegationChangesAt } from ".";

/**
 *  If and when each era started or will start.  The object is keyed by era names. The values either describe the epoch boundary when the era starts (can be in the future or in the past), or are null if not yet confirmed on-chain.  If you need to know the current era, see the `node_era` field of `GET /network/information`.  > Due to complications with our current tooling, we cannot mark the era names > as required, but the keys are in fact always present. 
 * @export
 * @interface ApiNetworkParametersEras
 */
export interface ApiNetworkParametersEras {
    /**
     * 
     * @type {WalletsDelegationChangesAt}
     * @memberof ApiNetworkParametersEras
     */
    byron?: WalletsDelegationChangesAt;
    /**
     * 
     * @type {WalletsDelegationChangesAt}
     * @memberof ApiNetworkParametersEras
     */
    shelley?: WalletsDelegationChangesAt;
    /**
     * 
     * @type {WalletsDelegationChangesAt}
     * @memberof ApiNetworkParametersEras
     */
    allegra?: WalletsDelegationChangesAt;
    /**
     * 
     * @type {WalletsDelegationChangesAt}
     * @memberof ApiNetworkParametersEras
     */
    mary?: WalletsDelegationChangesAt;
}