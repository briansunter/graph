import { getFiles } from "../../lib/fileProcessor";

const onBeforePrerenderStart: OnBeforePrerenderStartAsync = async (): ReturnType<OnBeforePrerenderStartAsync> => {
  const urlToPageMap = await getFiles();

  const tags = new Set<string>();

  Object.values(urlToPageMap).forEach(page => {
    if (page.props && Array.isArray(page.props.tags)) {
      page.props.tags.forEach(tag => tags.add(tag));
    }
  });

  const pages = Array.from(tags).map(async (tag) => {
    let redirectTo;
    if (tag === 'newsletter') {
      redirectTo = '/newsletter';
    }

    const pagesWithTag = Object.values(urlToPageMap).filter((page) => {
      return page.props.tags && page.props.tags.includes(tag);
    });

    const capitalizedPageTitle = tag.charAt(0).toUpperCase() + tag.slice(1);


    return {
      url: `/tags/${tag}`,
      pageContext: {
        title: `${capitalizedPageTitle}`,
        description: `Posts tagged with ${tag}`,
        pageProps: {
          title: capitalizedPageTitle,
          pages: pagesWithTag,
          redirectTo
        },
      },
    };
  });

  // Add /newsletter page with no redirectTo
  const newsletterPage = {
    url: '/newsletter',
    pageContext: {
      title: 'Newsletter',
      description: 'Posts tagged with newsletter',
      pageProps: {
        title: 'Newsletter',
        pages: Object.values(urlToPageMap).filter((page) => {
          return page.props.tags && page.props.tags.includes('newsletter');
        }),
      },
    },
  };

  pages.push(Promise.resolve(newsletterPage));

  return Promise.all(pages); 
};

export { onBeforePrerenderStart };