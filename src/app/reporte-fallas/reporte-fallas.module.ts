import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteFallasPageRoutingModule } from './reporte-fallas-routing.module';

import { ReporteFallasPage } from './reporte-fallas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReporteFallasPageRoutingModule
  ],
  declarations: [ReporteFallasPage]
})
export class ReporteFallasPageModule {}
