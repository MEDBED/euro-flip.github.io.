import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { getUserCountry } from '../../store/location/location.selector';
import {setUserCountry} from '../../store/location/location.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
})
export class HomeComponent implements OnInit {
  userCountry$: Observable<string>;

  constructor(private store: Store, private router: Router) {
    this.userCountry$ = this.store.pipe(select(getUserCountry));
  }

  ngOnInit(): void {
    this.store.dispatch(setUserCountry({ country: 'france' }));

    this.userCountry$.subscribe(country => {
      if (country) {
        let region: string;
        switch (country.toLowerCase()) {
          case 'france':
          case 'germany':
          case 'italy':
            region = 'europe';
            break;
          case 'usa':
          case 'canada':
            region = 'north-america';
            break;
          case 'japan':
          case 'china':
            region = 'asia';
            break;
          default:
            region = 'france'; // Default redirection
        }
        this.router.navigate([region]);
      }
    });
  }
}
