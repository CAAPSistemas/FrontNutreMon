import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nutremon.app',
  appName: 'nutre-mon-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
