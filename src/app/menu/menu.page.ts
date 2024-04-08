import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home'
    },    
    {
      titulo: 'Ventas',
      url: '/menu/ventas',
      icono: 'cart'
    },
    {
      titulo: 'Reporte Fallas',
      url: '/menu/reporte-fallas',
      icono: 'settings'
    },
    {
      titulo: 'Gestion Producto',
      url: '/menu/gestion-producto',
      icono: 'reader'
    },
    {
      titulo: 'Gestion S.S',
      url: '/menu/gestion-s-s',
      icono: 'receipt'
    },
    {
      titulo: 'Registrar Cliente',
      url: '/menu/registrar-cliente',
      icono: 'person-add'
    },
  
    
  ]

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }
  
  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: 'Deberas quieres salir',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },{
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login')
          }
        }
      ]

    });

    await alert.present();

  }

}
