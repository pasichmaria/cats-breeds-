/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CATS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
