export interface Context {
    log(message: string): void;
    generateRandomIdString(prefix: string): string;
    collections: any;
  };