declare module '@logseq/nbb-logseq' {
    export function loadString(input: string): Promise<any>;
    export function loadFile(input: string): Promise<any>;
  }