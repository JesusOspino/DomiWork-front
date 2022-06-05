import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/model/trabajador.model';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  value: string = '';
  genero: any;

  data: Trabajador = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    email: '',
    genero: '',
    descripccion: '',
    usuario: '',
    contrasena: '',
  };

  formularioReactivo = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    direccion: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    genero: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    descripccion: new FormControl('', [
      Validators.required,
      Validators.maxLength(1000),
    ]),
  });

  constructor(private trabajadorService: TrabajadorService) {}

  ngOnInit(): void {
    this.genero = [{ code: 'M' }, { code: 'F' }];
  }

  crearTrabajador() {
    if (this.formularioReactivo.valid) {
      this.trabajadorService
        .crearTrabajador(this.data)
        .subscribe((respuesta) => {
          alert('Trabajador añadido con exito');
        });
    } else {
      alert('Por favor llenar todos los campos y que sean correctos');
    }
  }
}
