/* tslint:disable */
/* eslint-disable */
/**
*/
export class ISOLanguage {
  free(): void;
/**
* @returns {any}
*/
  static all(): any;
/**
* @param {string} name
* @returns {ISOLanguage}
*/
  static from_str(name: string): ISOLanguage;
/**
* @returns {string}
*/
  to_name(): string;
/**
* @returns {string}
*/
  to_autonym(): string;
/**
* @returns {string}
*/
  to_639_3(): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_isolanguage_free: (a: number) => void;
  readonly isolanguage_all: () => number;
  readonly isolanguage_from_str: (a: number, b: number) => number;
  readonly isolanguage_to_name: (a: number, b: number) => void;
  readonly isolanguage_to_autonym: (a: number, b: number) => void;
  readonly isolanguage_to_639_3: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
