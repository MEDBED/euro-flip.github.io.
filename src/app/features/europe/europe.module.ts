import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: 'france', loadChildren: () => import('./france/france.routes').then(m => m.routes) } // ✅ Lazy-load France
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class EuropeModule { }
