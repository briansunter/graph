import wordsCounter from 'word-counting'
import { EleventyPage, Post } from '../types.js'
import fs from 'fs';
import util from 'util';
import { Context } from '../lib/Context.js';
const readFile = util.promisify(fs.readFile);
import keyword_extractor from "keyword-extractor";

export interface SearchPost {
  title: string;
  url: string;
  description: string;
  date: Date;
  tags: string[];
  coverimage: string;
  wordCount: number;
  lastModified: Date;
  keywords: string;
}

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
    const searchCollectionPromises = data.collections.all.map(async (item: EleventyPage<Post>) => {

      const lastModified = await this.lastModified(item);
      const content = await readFile(item.inputPath, 'utf-8');

      // remove markdown links and anything inside {% %}
      const filteredContent = content.replace(/\[.*?\]\(.*?\)/g, '').replace(/\{%.*?%\}/g, '').replace(/```[\s\S]*?```/g, '');

      const words = keyword_extractor.extract(filteredContent, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates:true 
      });

      const wordsString = words.join(' ');
      const searchPost: SearchPost = {
        title: item.data.title,
        url: item.url,
        description: item.data.description,
        date: item.date,
        tags: item.data.tags,
        coverimage: item.data.coverimage,
        wordCount: wordsCounter(content).wordsCount,
        lastModified: lastModified,
        keywords: wordsString,
      };
      return searchPost;
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