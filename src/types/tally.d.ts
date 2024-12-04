interface TallyConfig {
  formId: string;
  popup: {
    width: number;
    emoji: string;
    autoOpen: boolean;
    openOnExit: boolean;
    openOnDelay: boolean;
    hideName: boolean;
  };
}

interface TallyAPI {
  openPopup: (formId: string) => void;
}

interface Window {
  TallyConfig?: TallyConfig;
  Tally?: TallyAPI;
} 