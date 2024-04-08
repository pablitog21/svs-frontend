import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule),
      },     
      {
        path: 'ventas',
        loadChildren: () => import('../ventas/ventas.module').then( m => m.VentasPageModule)
      },
      {
        path: 'reporte-fallas',
        loadChildren: () => import('../reporte-fallas/reporte-fallas.module').then( m => m.ReporteFallasPageModule)
      },
      {
        path: 'gestion-producto',
        loadChildren: () => import('../gestion-producto/gestion-producto.module').then( m => m.GestionProductoPageModule)
      },
      {
        path: 'gestion-s-s',
        loadChildren: () => import('../gestion-s-s/gestion-s-s.module').then( m => m.GestionSSPageModule)
      },
      {
        path: 'registrar-cliente',
        loadChildren: () => import('../registrar-cliente/registrar-cliente.module').then( m => m.RegistrarClientePageModule)
      }
     
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
