import { getFiles } from '../../lib/fileProcessor'
import type { OnBeforePrerenderStartAsync, PageContext } from 'vike/types';

const onBeforePrerenderStart: OnBeforePrerenderStartAsync = async (): ReturnType<OnBeforePrerenderStartAsync> => {
  const urlToPageMap = await getFiles();

  const aliases = Object.values(urlToPageMap).map(page => {
    const aliases = page?.props?.aliases;
    if (!Array.isArray(aliases)) {
      console.log('Aliases is not an array:', aliases);
      return [];
    }

    return aliases.map(alias => {
      let url = alias;
      if (!url.startsWith('/')) {
        url = '/' + url;
      }
      return {
        url,
        pageContext: {pageProps: {page}},
      };
    });
  });

  const pages = Object.values(urlToPageMap).map(page => {
    let url = page.permalink;
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    return {
      url,
      pageContext: {pageProps: {page}},
    };
  });

  return pages; 
};

export { onBeforePrerenderStart };