import { CurrencyState } from './currency/currency.reducer';
import { LocationState } from './location/location.reducer';

export interface AppState {
  location: LocationState;
  currency: CurrencyState;
}
