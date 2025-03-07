import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setExchangeRate } from './currency.actions';
import { map, switchMap, interval } from 'rxjs';

@Injectable()
export class CurrencyEffects {
  updateExchangeRate$ = createEffect(() =>
    interval(3000).pipe(  // Every 3 seconds
      map(() => {
        const randomChange = (Math.random() * 0.1 - 0.05);
        return setExchangeRate({ rate: Math.max(0.5, 1.1 + randomChange) });
      })
    )
  );

  constructor(private actions$: Actions) {}
}
