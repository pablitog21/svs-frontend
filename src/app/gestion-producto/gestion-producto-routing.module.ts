import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionProductoPage } from './gestion-producto.page';

const routes: Routes = [
  {
    path: '',
    component: GestionProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProductoPageRoutingModule {}
