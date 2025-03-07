import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainHeaderComponent} from './shared/components/main-header/main-header.component';
import {MainFooterComponent} from './shared/components/main-footer/main-footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MainHeaderComponent,
    MainFooterComponent
  ],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EuroFlip';
}
