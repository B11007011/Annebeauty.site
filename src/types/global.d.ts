interface Window {
  FB: {
    init: (params: {
      appId: string;
      xfbml: boolean;
      version: string;
    }) => void;
    XFBML: {
      parse: (element?: HTMLElement | null) => void;
    };
  };
  fbAsyncInit: () => void;
}

declare namespace FB {
  function init(params: {
    appId: string;
    xfbml: boolean;
    version: string;
  }): void;

  namespace XFBML {
    function parse(element?: HTMLElement | null): void;
  }
} 