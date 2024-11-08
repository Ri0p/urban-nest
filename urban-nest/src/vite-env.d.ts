/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_AUTH_URL_PRODUCTION: string;
    // Add other environment variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  