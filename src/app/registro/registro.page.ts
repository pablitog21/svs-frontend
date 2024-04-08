import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AlertController, NavController, NavCustomEvent } from '@ionic/angular';
import { UsuarioService } from '../services/usuarios/usuario.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage implements OnInit {

  showPassword = false;
  passwordToggleIcon = 'eye';

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private usuarioService: UsuarioService) {

    this.formularioRegistro = this.fb.group({
      'nom': new FormControl("",Validators.required),
      'ape': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confcont': new FormControl("",Validators.required),
      'telefono': new FormControl("",Validators.required),
      'fechnacim': new FormControl("",Validators.required),
      'sexo': new FormControl("",Validators.required),
    })
   }

  ngOnInit() {
  }

  async guardar(){
      var f = this.formularioRegistro.value;

      if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header:'Datos incompletos',
          message: 'Tienes que llenar todos los datos',
          buttons: ['Aceptar']
        });
    
        await alert.present();
        return;
      }

      //conec BD
      
      this.usuarioService.crearUsuario(this.formularioRegistro.value).subscribe((respuesta)=>{
        this.navCtrl.navigateRoot('menu/inicio');
          this.alertController.create({
          header:'Datos Correctos',
          message: 'Su usuario se creo correctamente',
          buttons: ['Aceptar']
        });
      })

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
