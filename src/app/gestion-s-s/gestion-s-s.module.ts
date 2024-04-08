import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionSSPageRoutingModule } from './gestion-s-s-routing.module';

import { GestionSSPage } from './gestion-s-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionSSPageRoutingModule
  ],
  declarations: [GestionSSPage]
})
export class GestionSSPageModule {}
