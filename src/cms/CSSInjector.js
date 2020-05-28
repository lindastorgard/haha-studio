import React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";

const CSSInjector = ({ children }) => {
  const iframe = document.getElementsByTagName("iframe")[0];
  const iframeHead = iframe.contentDocument.head;
  let cache = createCache({ container: iframeHead });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default CSSInjector;
