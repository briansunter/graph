  const Fuse = require('fuse.js');

  const options = {
    keys: ['title', 'content', 'tags', 'description'],
  };

  class SearchIndex {
    data() {
      return {
        permalink: "/api/search-index.json"
      };
    }
  
    async render(data) {
      const searchCollectionPromises = data.collections.all.map(async (item) => {
        const content = await item.template.read();
        const words = new Set(content.content.split(/\s+/).map(w => w.toLowerCase()));
        const wordsArray = Array.from(words).filter(w => w.length > 2);
        const filteredWords = wordsArray.filter(word => {
          const regex = new RegExp('^[a-zA-Z]+$');
          return regex.test(word);
        });
        const wordsString = filteredWords.join(' ');
        return {
          title: item.data.title,
          url: item.url,
          description: item.data.description,
          content: wordsString,
          tags: item.data.tags,
        };
      });
    
      const searchCollection = await Promise.all(searchCollectionPromises);
    
      // const index = Fuse.createIndex(options.keys, searchCollection);
    
      return JSON.stringify(searchCollection);
    } 
      
  }
  
  module.exports = SearchIndex;