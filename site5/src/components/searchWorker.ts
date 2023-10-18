import uFuzzy from '@leeoniya/ufuzzy';

declare const self: DedicatedWorkerGlobalScope;
let searchData: any[] = [];

// Fetch the search data once on initial startup
fetch('/api/search.json')
  .then(response => response.json())
  .then(data => {
    searchData = data;
  });

self.onmessage = (event) => {
  const { search } = event.data;
  const uf = new uFuzzy();
  const searchResults = uf.search(searchData.map((p:{content: string})=>p.content), search);
  let results = [];

  if (Array.isArray(searchResults)) {
    const [haystackIdxs, info, infoIdxOrder] = searchResults;

    if (haystackIdxs && info && infoIdxOrder) {
      results = infoIdxOrder.map(idx => {
        const post = searchData[haystackIdxs[idx]];
        const highlightRanges = info.ranges[idx];
        const highlightedPostContent = uFuzzy.highlight(post.content, highlightRanges);
        return { ...post, highlightedContent: highlightedPostContent };
      });
    } else if (haystackIdxs) {
      results = haystackIdxs.map(idx => searchData[idx]);
    }
  }

  self.postMessage(results);
}