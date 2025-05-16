import {posix, join, dirname} from "path";
function createAsURL(specifier, baseURL) {
  if (baseURL && (specifier.startsWith("/") || specifier.startsWith("./") || specifier.startsWith("../"))) {
    try {
      return new URL(specifier, baseURL).toString();
    } catch {
      return join(dirname(baseURL), specifier);
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
        return posix.join(resolutionResult, afterPrefix);
      }
    }
  }
  return null;
}
export function resolve(specifier, {imports = {}, scopes = {}}, baseURL) {
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
