import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { LoginService } from '../services/auth/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPassword = false;
  passwordToggleIcon = 'eye';


  formularioLogin: FormGroup;


  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private loginService: LoginService,
    private route: Router) {

    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    })
  }

  ngOnInit() {
  }

  async ingresar() {

    if (this.formularioLogin.valid) {
      const login = this.formularioLogin.value;
      this.loginService.openLogin(login).subscribe((resp) => {
        if (!resp.resp) {
          localStorage.setItem('ingresado', 'true');
          this.inicio()
        }
      })
    } else {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }

  inicio(): void {
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
