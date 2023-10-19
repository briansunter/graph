  const Fuse = require('fuse.js');

  const options = {
    keys: ['title', 'content', 'tags', 'description'],
  };

  class SearchIndex {
    data() {
      return {
        permalink: "public/api/search.json",
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
          date: item.date,
          tags: item.data.tags,
          coverimage: item.data.coverimage,
        };
      });
    
      const searchCollection = await Promise.all(searchCollectionPromises);

      // repeat 10 x times
      const duped = []
      for (let i = 0; i < 100; i++) {
        duped.push(...searchCollection)
      }
      
    
      return JSON.stringify(duped);
    } 
      
  }
  

  module.exports = SearchIndex