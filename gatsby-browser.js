import React from 'react'
import wrapRootElement from 'store/providers.js';
import { amendOptions, filterProviderKeys } from './utils'

const SCRIPTS = {
  Maps: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBLSnjOMBHySuQHfnC-AoDyh1TmjzDUgxM&libraries=places",
};

const createScriptTag = (key, scriptSrc) => {
  return React.createElement(
    "script",
    { 
      src: scriptSrc,
      
      key: `gatsby-plugin-script-${key.toLowerCase()}` },
    null
  );
};

const onRenderBody = ({ setPostBodyComponents }, options) => {
  options = amendOptions(options);

  const scriptKeys = filterProviderKeys(
    Object.keys(SCRIPTS),
    options.providers
  );

  const scripts = scriptKeys.map(key => createScriptTag(key, SCRIPTS[key]));
  setPostBodyComponents(scripts);
};


export {
  wrapRootElement,
  onRenderBody
}