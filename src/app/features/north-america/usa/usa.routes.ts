import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';


import { usaFeatureKey, usaReducer } from '../../../store/region/north-america/usa/reducers/usa.reducer';
import { UsaEffects } from '../../../store/region/north-america/usa/effects/usa.effects';
import { UsaLandingPageComponent } from './components/usa-landing-page/usa-landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: UsaLandingPageComponent,
    providers: [
      provideState(usaFeatureKey, usaReducer),
      provideEffects(UsaEffects)
    ]
  }
];
