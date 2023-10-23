export type Post = {
    coverimage: string;
    title: string;
    description: string;
    publishDate: string;
    updatedDate: string;
    tags: string[];
    content: string;
  };


export interface EleventyPage<T = any> {
  template: string;
  data: T;
  page: any;
  inputPath: string;
  fileSlug: string;
  filePathStem: string;
  date: Date;
  outputPath: string;
  url: string;
  templateContent: string;
  content: string;
}

export interface ImageFormat {
  format: string;
  width: number;
  height: number;
  url: string;
  sourceType: string;
  srcset: string;
  filename: string;
  outputPath: string;
  size: number;
}

export interface ImageMetadata {
  [key: string]: ImageFormat[];
}