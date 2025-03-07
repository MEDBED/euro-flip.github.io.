import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setUsaCurrencyRate } from '../reducers/usa.reducer';
import { map, interval } from 'rxjs';

@Injectable()
export class UsaEffects {
  //for example for dollar/ EUR OTHER CONDITION ...
  updateUsaExchangeRate$ = createEffect(() =>
    interval(3000).pipe( // Runs every 3 seconds
      map(() => {
        const randomChange = (Math.random() * 0.1 - 0.05);
        return setUsaCurrencyRate({ rate: Math.max(0.5, 0.8 + randomChange) });
      })
    )
  );

  constructor(private actions$: Actions) {}
}
