// Google Analytics 型定義
export interface GtagConfig {
  page_location?: string;
  page_title?: string;
  page_path?: string;
}

export interface GtagEvent {
  event_category: string;
  event_label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: GtagConfig | GtagEvent
    ) => void;
  }
}
