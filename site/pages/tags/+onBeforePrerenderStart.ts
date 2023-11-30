import { getFiles } from '../../lib/fileProcessor'
import type { OnBeforePrerenderStartAsync, PageContext } from 'vike/types';
import { DateTime } from 'luxon';
import path from 'path';
import { ImageProcessor } from '../../lib/ImageProcessor'; // Update this import based on your project structure

const imageProcessor = ImageProcessor.getInstance();

const onBeforePrerenderStart: OnBeforePrerenderStartAsync = async (): ReturnType<OnBeforePrerenderStartAsync> => {
  const urlToPageMap = await getFiles();

  const tags = new Set<string>();

  Object.values(urlToPageMap).forEach(page => {
    if (page.props && Array.isArray(page.props.tags)) {
      page.props.tags.forEach(tag => tags.add(tag));
    }
  });

  const pages = Array.from(tags).map(async (tag) => {
    const pagesWithTag = Object.values(urlToPageMap).filter((page) => {
      return page.props.tags && page.props.tags.includes(tag);
    });

    return {
      url: `/tags/${tag}`,
      pageContext: {pageProps: {pages: pagesWithTag}},
    };
  });

  return Promise.all(pages); 
};

export { onBeforePrerenderStart };