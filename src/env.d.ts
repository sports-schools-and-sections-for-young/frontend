/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_GEOSUGGEST_KEY: string;
  readonly VITE_GEOCODER_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
