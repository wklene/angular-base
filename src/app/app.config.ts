import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDeKa3Owsa5qx3UqgJzVyltL11gJPgpwOc',
        authDomain: 'nak-amstelveen.firebaseapp.com',
        projectId: 'nak-amstelveen',
        storageBucket: 'nak-amstelveen.firebasestorage.app',
        messagingSenderId: '599099230135',
        appId: '1:599099230135:web:dc1e1c35dc4c98234cca32',
        measurementId: 'G-6CCTB8FF44',
      }),
    )
  ],
};
