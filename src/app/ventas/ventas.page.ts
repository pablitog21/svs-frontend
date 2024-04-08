import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

productos: any = [];

  constructor(
    private router: Router,
    public alertController: AlertController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getProductos().subscribe(res => {
      this.productos = res;
    })
  }

  getProductos(){
    return this.http
      .get("assets/files/productos.json")
      .pipe(
        map((res: any) => {
          return res.data;
        })
      )
  }
}
