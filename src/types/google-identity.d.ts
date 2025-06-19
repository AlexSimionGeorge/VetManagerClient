declare global {
  interface Window {
    google?: typeof google;
  }

  namespace google {
    namespace accounts {
      namespace id {
        interface CredentialResponse {
          credential: string;
          select_by: string;
        }

        interface IdConfiguration {
          client_id: string;
          callback: (response: CredentialResponse) => void;
        }

        function initialize(config: IdConfiguration): void;

        function renderButton(
          parent: HTMLElement | null,
          options: {
            theme: 'outline' | 'filled_blue' | 'filled_black';
            size: 'small' | 'medium' | 'large';
          }
        ): void;
      }
    }
  }
}

export {};
