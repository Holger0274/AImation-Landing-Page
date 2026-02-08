// Calendly Popup Widget TypeScript Definitions
// Documentation: https://help.calendly.com/hc/en-us/articles/360020052833-Advanced-embed-options

export interface CalendlyPrefillData {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  customAnswers?: Record<string, string>;
  guests?: string[];
}

export interface CalendlyUtmParameters {
  utmCampaign?: string;
  utmSource?: string;
  utmMedium?: string;
  utmContent?: string;
  utmTerm?: string;
}

export interface CalendlyPopupOptions {
  url: string;
  prefill?: CalendlyPrefillData;
  utm?: CalendlyUtmParameters;
  pageSettings?: {
    backgroundColor?: string;
    hideEventTypeDetails?: boolean;
    hideLandingPageDetails?: boolean;
    primaryColor?: string;
    textColor?: string;
  };
}

export interface CalendlyEvent {
  event: string;
  payload: {
    event: {
      uri: string;
    };
    invitee: {
      uri: string;
    };
  };
}

export interface CalendlyWidget {
  initPopupWidget: (options: CalendlyPopupOptions) => void;
  closePopupWidget: () => void;
  initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
  destroyBadgeWidget: () => void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}

export {};
