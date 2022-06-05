import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  usuarios: any;

  constructor(private trabajadorService: TrabajadorService) {}

  ngOnInit(): void {
    this.getTrabajadores();
  }

  getTrabajadores() {
    this.trabajadorService.getTrabajadores().forEach((data) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }
}
