import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { RTLProviderProps } from './RTLProvider.types';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export const RTLProvider = (props: RTLProviderProps) => {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
