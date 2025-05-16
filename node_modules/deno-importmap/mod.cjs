var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  __markAsModule(target);
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true}), module2);
};
__export(exports, {
  resolve: () => resolve
});
var path = __toModule(require("path"));
function createAsURL(specifier, baseURL) {
  if (baseURL && (specifier.startsWith("/") || specifier.startsWith("./") || specifier.startsWith("../"))) {
    try {
      return new URL(specifier, baseURL).toString();
    } catch {
      return path.join(path.dirname(baseURL), specifier);
    }
  } else {
    try {
      return new URL(specifier).toString();
    } catch {
      return specifier;
    }
  }
}
function resolveImportMatch(normalizedSpecifier, specifierMap) {
  for (const [specifierKey, resolutionResult] of Object.entries(specifierMap)) {
    if (resolutionResult === null) {
      throw Error(`resolution of specifierKey was blocked by a null entry.`);
    }
    if (specifierKey === normalizedSpecifier) {
      return resolutionResult;
    } else if (specifierKey.endsWith("/") && normalizedSpecifier.startsWith(specifierKey)) {
      const afterPrefix = normalizedSpecifier.slice(specifierKey.length);
      try {
        return new URL(afterPrefix, resolutionResult).toString();
      } catch {
        return path.posix.join(resolutionResult, afterPrefix);
      }
    }
  }
  return null;
}
function resolve(specifier, {imports = {}, scopes = {}}, baseURL) {
  const baseURLString = baseURL;
  const asURL = createAsURL(specifier, baseURL);
  const normalizedSpecifier = asURL?.toString() || specifier;
  for (const [scopePrefix, scopeImports] of Object.entries(scopes)) {
    if (scopePrefix === baseURLString || scopePrefix.endsWith("/") && baseURLString && baseURLString.startsWith(scopePrefix)) {
      const scopeImportsMatch = resolveImportMatch(normalizedSpecifier, scopeImports);
      if (scopeImportsMatch)
        return scopeImportsMatch;
    }
  }
  const topLevelImportsMatch = resolveImportMatch(normalizedSpecifier, imports);
  if (topLevelImportsMatch)
    return topLevelImportsMatch;
  if (asURL)
    return asURL.toString();
  throw Error(`specifier was a bare specifier, but was not remapped to anything by importMap.`);
}
