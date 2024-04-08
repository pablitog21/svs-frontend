import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteFallasPage } from './reporte-fallas.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteFallasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteFallasPageRoutingModule {}
