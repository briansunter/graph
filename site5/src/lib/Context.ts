import { ImageMetadata } from '../types';
export interface Context {
    log(message: string): void;
    generateRandomIdString(prefix: string): string;
    collections: any;
    react: (componentName: string, props: Object) => string;
    lastModified: (value: any) => Promise<Date>;
    image: (src: string, alt: string, sizes: string) => Promise<string>;
    imageMeta: (src: string) => Promise<ImageMetadata>;
  };