import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController, NavCustomEvent } from '@ionic/angular';
import { ReportfallaService } from '../services/repofalla/reportfalla.service';


@Component({
  selector: 'app-reporte-fallas',
  templateUrl: './reporte-fallas.page.html',
  styleUrls: ['./reporte-fallas.page.scss'],
})
export class ReporteFallasPage implements OnInit {

  showPassword = false;
  passwordToggleIcon = 'eye';

  formrep: FormGroup;

  constructor(public fm: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private reportfallaService: ReportfallaService
  ) {
    this.formrep = this.fm.group({
      'fech_report': new FormControl("", Validators.required),
      'cuenrepo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'dat_falla': new FormControl("", Validators.required),
    })
  }

  ngOnInit() {
  }

  async guardar() {
    var f = this.formrep.value;

    if (this.formrep.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    this.reportfallaService.crearReporte(this.formrep.value).subscribe((respuesta) => {
      this.alertController.create({
        header: 'Datos Correctos',
        message: 'Su usuario se creo correctamente',
        buttons: ['Aceptar']
      });
    })
    this.navCtrl.navigateRoot('menu/inicio');
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

}
