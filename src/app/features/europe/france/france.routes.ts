import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { FranceLandingPageComponent } from './components/france-landing-page/france-landing-page.component';
import { franceFeatureKey, franceReducer } from '../../../store/region/europe/france/reducers/france.reducer';
import { FranceEffects } from '../../../store/region/europe/france/effects/france.effects';

export const routes: Routes = [
  {
    path: '',
    component: FranceLandingPageComponent,
    providers: [
      provideState(franceFeatureKey, franceReducer),
      provideEffects(FranceEffects)
    ]
  }
];
