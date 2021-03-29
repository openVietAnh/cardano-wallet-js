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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { BadRequest } from '../models';
import { Body12 } from '../models';
import { Body13 } from '../models';
import { Body14 } from '../models';
import { InlineResponse20010 } from '../models';
import { InlineResponse2003 } from '../models';
import { ApiWallet } from '../models';
import { InlineResponse2011 } from '../models';
import { InlineResponse403 } from '../models';
import { InlineResponse415 } from '../models';
import { NoSuchWallet } from '../models';
import { NotAcceptable } from '../models';
import { UnsupportedMediaType } from '../models';
/**
 * ByronWalletsApi - axios parameter creator
 * @export
 */
export const ByronWalletsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet. 
         * @summary Delete
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteByronWallet: async (walletId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'walletId' is not null or undefined
            if (walletId === null || walletId === undefined) {
                throw new RequiredError('walletId','Required parameter walletId was null or undefined when calling deleteByronWallet.');
            }
            const localVarPath = `/byron-wallets/{walletId}`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 
         * @summary UTxO Statistics
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByronUTxOsStatistics: async (walletId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'walletId' is not null or undefined
            if (walletId === null || walletId === undefined) {
                throw new RequiredError('walletId','Required parameter walletId was null or undefined when calling getByronUTxOsStatistics.');
            }
            const localVarPath = `/byron-wallets/{walletId}/statistics/utxos`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet. 
         * @summary Get
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByronWallet: async (walletId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'walletId' is not null or undefined
            if (walletId === null || walletId === undefined) {
                throw new RequiredError('walletId','Required parameter walletId was null or undefined when calling getByronWallet.');
            }
            const localVarPath = `/byron-wallets/{walletId}`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest. 
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listByronWallets: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/byron-wallets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications. 
         * @summary Restore
         * @param {Body12} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postByronWallet: async (body: Body12, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postByronWallet.');
            }
            const localVarPath = `/byron-wallets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p> 
         * @summary Update Metadata
         * @param {Body13} body 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putByronWallet: async (body: Body13, walletId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling putByronWallet.');
            }
            // verify required parameter 'walletId' is not null or undefined
            if (walletId === null || walletId === undefined) {
                throw new RequiredError('walletId','Required parameter walletId was null or undefined when calling putByronWallet.');
            }
            const localVarPath = `/byron-wallets/{walletId}`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p> 
         * @summary Update Passphrase
         * @param {Body14} body 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putByronWalletPassphrase: async (body: Body14, walletId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling putByronWalletPassphrase.');
            }
            // verify required parameter 'walletId' is not null or undefined
            if (walletId === null || walletId === undefined) {
                throw new RequiredError('walletId','Required parameter walletId was null or undefined when calling putByronWalletPassphrase.');
            }
            const localVarPath = `/byron-wallets/{walletId}/passphrase`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ByronWalletsApi - functional programming interface
 * @export
 */
export const ByronWalletsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet. 
         * @summary Delete
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteByronWallet(walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ByronWalletsApiAxiosParamCreator(configuration).deleteByronWallet(walletId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 
         * @summary UTxO Statistics
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getByronUTxOsStatistics(walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>> {
            const localVarAxiosArgs = await ByronWalletsApiAxiosParamCreator(configuration).getByronUTxOsStatistics(walletId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet. 
         * @summary Get
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getByronWallet(walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2011>> {
            const localVarAxiosArgs = await ByronWalletsApiAxiosParamCreator(configuration).getByronWallet(walletId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest. 
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listByronWallets(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InlineResponse20010>>> {
            const localVarAxiosArgs = await ByronWalletsApiAxiosParamCreator(configuration).listByronWallets(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications. 
         * @summary Restore
         * @param {Body12} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postByronWallet(body: Body12, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2011>> {
            const localVarAxiosArgs = await ByronWalletsApiAxiosParamCreator(configuration).postByronWallet(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p> 
         * @summary Update Metadata
         * @param {Body13} body 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putByronWallet(body: Body13, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiWallet>> {
            const localVarAxiosArgs = await ByronWalletsApiAxiosParamCreator(configuration).putByronWallet(body, walletId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p> 
         * @summary Update Passphrase
         * @param {Body14} body 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putByronWalletPassphrase(body: Body14, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ByronWalletsApiAxiosParamCreator(configuration).putByronWalletPassphrase(body, walletId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ByronWalletsApi - factory interface
 * @export
 */
export const ByronWalletsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet. 
         * @summary Delete
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteByronWallet(walletId: string, options?: any): AxiosPromise<void> {
            return ByronWalletsApiFp(configuration).deleteByronWallet(walletId, options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 
         * @summary UTxO Statistics
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByronUTxOsStatistics(walletId: string, options?: any): AxiosPromise<InlineResponse2003> {
            return ByronWalletsApiFp(configuration).getByronUTxOsStatistics(walletId, options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet. 
         * @summary Get
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByronWallet(walletId: string, options?: any): AxiosPromise<InlineResponse2011> {
            return ByronWalletsApiFp(configuration).getByronWallet(walletId, options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest. 
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listByronWallets(options?: any): AxiosPromise<Array<InlineResponse20010>> {
            return ByronWalletsApiFp(configuration).listByronWallets(options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications. 
         * @summary Restore
         * @param {Body12} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postByronWallet(body: Body12, options?: any): AxiosPromise<InlineResponse2011> {
            return ByronWalletsApiFp(configuration).postByronWallet(body, options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p> 
         * @summary Update Metadata
         * @param {Body13} body 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putByronWallet(body: Body13, walletId: string, options?: any): AxiosPromise<ApiWallet> {
            return ByronWalletsApiFp(configuration).putByronWallet(body, walletId, options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p> 
         * @summary Update Passphrase
         * @param {Body14} body 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putByronWalletPassphrase(body: Body14, walletId: string, options?: any): AxiosPromise<void> {
            return ByronWalletsApiFp(configuration).putByronWalletPassphrase(body, walletId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ByronWalletsApi - object-oriented interface
 * @export
 * @class ByronWalletsApi
 * @extends {BaseAPI}
 */
export class ByronWalletsApi extends BaseAPI {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet. 
     * @summary Delete
     * @param {string} walletId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    public deleteByronWallet(walletId: string, options?: any) {
        return ByronWalletsApiFp(this.configuration).deleteByronWallet(walletId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 
     * @summary UTxO Statistics
     * @param {string} walletId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    public getByronUTxOsStatistics(walletId: string, options?: any) {
        return ByronWalletsApiFp(this.configuration).getByronUTxOsStatistics(walletId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet. 
     * @summary Get
     * @param {string} walletId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    public getByronWallet(walletId: string, options?: any) {
        return ByronWalletsApiFp(this.configuration).getByronWallet(walletId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest. 
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    public listByronWallets(options?: any) {
        return ByronWalletsApiFp(this.configuration).listByronWallets(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications. 
     * @summary Restore
     * @param {Body12} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    public postByronWallet(body: Body12, options?: any) {
        return ByronWalletsApiFp(this.configuration).postByronWallet(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * @summary Update Metadata
     * @param {Body13} body 
     * @param {string} walletId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    public putByronWallet(body: Body13, walletId: string, options?: any) {
        return ByronWalletsApiFp(this.configuration).putByronWallet(body, walletId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * @summary Update Passphrase
     * @param {Body14} body 
     * @param {string} walletId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    public putByronWalletPassphrase(body: Body14, walletId: string, options?: any) {
        return ByronWalletsApiFp(this.configuration).putByronWalletPassphrase(body, walletId, options).then((request) => request(this.axios, this.basePath));
    }
}