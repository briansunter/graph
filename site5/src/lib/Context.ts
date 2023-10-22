export interface Context {
    log(message: string): void;
    generateRandomIdString(prefix: string): string;
    collections: any;
    react: (componentName: string, props: Object) => string;
    lastModified: (value: any) => Promise<Date>;
  };