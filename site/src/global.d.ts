  declare global {
    interface Window {
      dataLayer: any[];
      gtag: (command: string, target: string, params?: any) => void;
    }
  }