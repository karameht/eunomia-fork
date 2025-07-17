// Environment Variables Type Definitions
export interface ImportMetaEnv {
   // Environment
   readonly VITE_NODE_ENV: 'development' | 'staging' | 'production';

   // Development Settings
   readonly VITE_DEV_TOOLS: string;
   readonly VITE_A11Y_CHECKS: string;
   readonly VITE_DEBUG_MODE: string;
}

export interface ImportMeta {
   readonly env: ImportMetaEnv;
}
