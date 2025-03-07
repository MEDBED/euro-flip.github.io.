import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { currencyReducer } from './store/currency/currency.reducer';
import { locationReducer } from './store/location/location.reducer';
import { CurrencyEffects } from './store/currency/currency.effects';
import { LocationEffects } from './store/location/location.effects'; // Example if needed
import { SharedModule } from './shared/shared.module';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideStore({
      location: locationReducer,
      currency: currencyReducer
    }),
    provideEffects([CurrencyEffects, LocationEffects]), // Include multiple effects if needed
    ...(isDevMode() ? [provideStoreDevtools({ maxAge: 25 })] : []), // Enable only in development
    importProvidersFrom(SharedModule) // Import shared module globally
  ]
};
