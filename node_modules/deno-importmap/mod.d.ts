declare module 'deno-importmap' {
  export interface SpecifierMap {
    [specifier: string]: string
  }
  export interface Scopes {
    [url: string]: SpecifierMap
  }
  export interface ImportMap {
    imports?: SpecifierMap
    scopes?: Scopes
  }
  /**
   * resolves specifier with import map.
   * ```ts
   * import { resolve } from "https://deno.land/x/importmap/mod.ts"
   *
   * const specifier = "foo/mod.ts"
   * const importMap = { imports: { "foo/": "bar/" } }
   * const resolvedSpecifier = resolve(specifier, importMap) // returns "bar/mod.ts"
   * ```
   */
  export function resolve(
    specifier: string,
    { imports, scopes }: ImportMap,
    baseURL?: string
  ): string
}
