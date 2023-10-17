import { EleventyConfig } from "./eleventy";

export default function (
  eleventyConfig: EleventyConfig,
  options = { baseUrl: "http://localhost:8080" }
) {
  eleventyConfig.addShortcode("youtube", function (videoId) {
    return `https://www.youtube.com/watch?v=${videoId}`;
  });
  eleventyConfig.addShortcode("tweet", function (userId, tweetId) {
    return `https://twitter.com/${userId}/status/${tweetId}`;
  });
  eleventyConfig.addShortcode("sref", function (url) {
    return `${options.baseUrl}${url}`;
  });
  eleventyConfig.addShortcode("embed", function (url) {
    return `embed url`;
  });
  eleventyConfig.addShortcode("renderer", function (url) {
    return `renderer url`;
  });
  eleventyConfig.addShortcode("ytime", function (url) {
    return `ytime url`;
  });
  eleventyConfig.addPairedShortcode("logseq", function (url) {
    return `logseq url`;
  });
  eleventyConfig.addPairedShortcode("logseqOrgNOTE", function (url) {
    return `logseq url`;
  });
  eleventyConfig.addPairedShortcode("logseqOrgWARNING", function (url) {
    return `logseq url`;
  });
  eleventyConfig.addPairedShortcode("logseqOrgSRC", function (url) {
    return `logseq url`;
  });
  eleventyConfig.addPairedShortcode("logseqOrgQUOTE", function (url) {
    return `logseq url`;
  });
  eleventyConfig.addShortcode("jsonPosts", function (url) {
    return "foo";
  });
}
