import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionSSPage } from './gestion-s-s.page';

const routes: Routes = [
  {
    path: '',
    component: GestionSSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionSSPageRoutingModule {}
