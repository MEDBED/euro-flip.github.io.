import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { setUserCountry, detectUserLocation } from './location.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LocationEffects {
  constructor(private actions$: Actions, private store: Store, private http: HttpClient) {}

  detectLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(detectUserLocation),
      switchMap(() =>
        new Promise<{ country: string }>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              this.http
                .get<any>(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                .subscribe(
                  (response) => {
                    resolve({ country: response.address.country.toLowerCase() });
                  },
                  (error) => {
                    reject('Failed to get location');
                  }
                );
            },
            (error) => reject('Location access denied')
          );
        })
      ),
      map(({ country }) => setUserCountry({ country })), // Dispatch the country
      catchError(() => of(setUserCountry({ country: 'france' }))) // Default fallback
    )
  );
}
