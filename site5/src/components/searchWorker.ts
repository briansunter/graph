import uFuzzy from '@leeoniya/ufuzzy';

declare const self: DedicatedWorkerGlobalScope;
let searchData: any[] = [];
let searchStrings: string[] = [];

// Fetch the search data once on initial startup
fetch('/api/search.json')
  .then(response => response.json())
  .then(data => {
    searchData = data;
    searchStrings   = searchData.map((p:Post)=>uFuzzy.latinize([p.title, p?.tags?.join(' '), p.description, p.content ?? ''].join(' ')));
  });

  const cmp = new Intl.Collator('en').compare;
  const typeAheadSort = (info:uFuzzy.Info, haystack: string[], needle: string) => {
    const { idx, terms, interLft2, interLft1, interRgt2, interRgt1, intraIns, interIns, chars, ranges } = info;
  
    return idx.map((v, i) => i).sort((ia, ib) => {
      const haystackIa = haystack[idx[ia]];
      const haystackIb = haystack[idx[ib]];
  
      // least char intra-fuzz (most contiguous)
      const intraDiff = intraIns[ia] - intraIns[ib];
  
      // earliest start of match
      const startDiff = ranges[ia][0] - ranges[ib][0];
  
      // shortest match first
      const lengthDiff = haystackIa.length - haystackIb.length;
  
      // most prefix/suffix bounds, boosted by full term matches
      const termDiff = (
        (terms[ib] + interLft2[ib] + 0.5 * interLft1[ib] + interRgt2[ib] + 0.5 * interRgt1[ib]) -
        (terms[ia] + interLft2[ia] + 0.5 * interLft1[ia] + interRgt2[ia] + 0.5 * interRgt1[ia])
      );
  
      // highest density of match (least term inter-fuzz)
      const interDiff = interIns[ia] - interIns[ib];
  
      // alphabetic
      const cmpDiff = cmp(haystackIa, haystackIb);
  
      return intraDiff || startDiff || lengthDiff || termDiff || interDiff || cmpDiff;
    });
  };

self.onmessage = (event) => {
  const { search } = event.data;
  const uf = new uFuzzy({
    unicode: false,
    intraMode: 1,
    intraDel: 1,
    intraIns: 1,
    intraTrn: 1,
    sort: typeAheadSort,
  });

  const latinizedSearch = uFuzzy.latinize(search|| ''); // convert search string to ASCII
  const searchResults = uf.search(searchStrings, latinizedSearch);
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

  const resultsWithoutContent = results.map((r:Post) => {
    const { content, ...rest } = r;
    return rest;
  });

  self.postMessage(resultsWithoutContent);
}