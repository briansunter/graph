  declare global {
    interface Window {
      dataLayer: any[];
      gtag: (command: string, target: string, params?: any) => void;
    }
  }



declare module '@microflash/rehype-figure' {
  interface RehypeFigure {
    process: (input: any) => any;
  }

  const rehypeFigure: RehypeFigure;
  export default rehypeFigure;
}