/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} bytes
* @returns {(string | number | boolean | undefined)[][]}
*/
export function get_all_rows(bytes: Uint8Array): (string | number | boolean | undefined)[][];
/**
* @param {Uint8Array} bytes
* @param {[number, string][]} schema
* @returns {Record<string, string | number | boolean | undefined>[]}
*/
export function get_parsed_rows(bytes: Uint8Array, schema: [number, string][]): Record<string, string | number | boolean | undefined>[];
