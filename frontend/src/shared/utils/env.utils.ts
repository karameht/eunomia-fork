/**
 * Environment configuration utilities for EUNOMIA
 */

// Helper function to parse boolean environment variables
const getEnvBool = (key: string, defaultValue = false): boolean => {
   const value = import.meta.env[key];
   if (!value) return defaultValue;
   return value.toLowerCase() === 'true';
};

// Environment Detection
export const getEnvironment = (): 'development' | 'staging' | 'production' => {
   const nodeEnv = import.meta.env.VITE_NODE_ENV;
   if (nodeEnv === 'staging' || nodeEnv === 'production') {
      return nodeEnv;
   }
   return 'development';
};

// Development Configuration
export const devConfig = {
   environment: getEnvironment(),
   devTools: getEnvBool('VITE_DEV_TOOLS', true),
   a11yChecks: getEnvBool('VITE_A11Y_CHECKS', true),
   debugMode: getEnvBool('VITE_DEBUG_MODE', false),
   isDev: getEnvironment() === 'development',
   isStaging: getEnvironment() === 'staging',
   isProd: getEnvironment() === 'production',
} as const;

// Export simplified env
export const env = {
   dev: devConfig,
} as const;
