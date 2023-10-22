  import wordsCounter from 'word-counting'
  import {EleventyPage, Post} from '../types.js'
  import fs from 'fs';
  import util from 'util';
import { Context } from '../lib/Context.js';
const readFile = util.promisify(fs.readFile);
 
  const stat = util.promisify(fs.stat);
  const options = {
    keys: ['title', 'content', 'tags', 'description'],
  };

  class SearchIndex {
    data() {
      return {
        permalink: "public/api/search.json",
      };
    }
    async render(this: Context, data: Context) {
      const searchCollectionPromises = data.collections.all.map(async (item:EleventyPage<Post>) => {


        const lastModified = await this.lastModified(item);
        const content = await readFile(item.inputPath, 'utf-8');

        const words = new Set(content.split(/\s+/).map(w => w.toLowerCase()));
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
          wordCount: wordsCounter(content).wordsCount,
          lastModified: lastModified
        };
      });
    
      const searchCollection = await Promise.all(searchCollectionPromises);

      // repeat 10 x times
      const duped = []
      for (let i = 0; i < 10; i++) {
        duped.push(...searchCollection)
      }
      
    
      return JSON.stringify(duped);
    } 
      
  }
  

  module.exports = SearchIndex