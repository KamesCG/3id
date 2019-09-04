export  const filterFunc = (key, filter, exclude) => {
  if (!filter) return true;

  const filterIncludes = filter.includes(key);
  return exclude ? !filterIncludes : filterIncludes;
};

export const filterProviderKeys = (keys, filter) => {
  if (!filter) return keys;

  return keys
    .filter(key => filterFunc(key, filter.include))
    .filter(key => filterFunc(key, filter.exclude, true));
};


const { defaultsDeep } = require("lodash");

const DEFAULT_USE_PREFIX = ["oembed"];

const DEFAULT_OPTIONS = {
  usePrefix: false
};

export const amendOptions = options => {
  if (options.usePrefix && !Array.isArray(options.usePrefix)) {
    // usePrefix: true
    options.usePrefix = DEFAULT_USE_PREFIX;
  }

  return defaultsDeep({}, options, DEFAULT_OPTIONS);
};
