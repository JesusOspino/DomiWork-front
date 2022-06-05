import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  detalle_id: any;
  usuario: any;

  constructor(
    private activateRouter: ActivatedRoute,
    private trabajadorService: TrabajadorService
  ) {}

  ngOnInit(): void {
    this.detalle_id = this.activateRouter.snapshot.params;
    this.getUsuario();
  }

  getUsuario() {
    this.trabajadorService
      .getTrabajador(this.detalle_id.id)
      .subscribe((data) => {
        this.usuario = data;
        console.log(this.usuario);
      });
  }

  goToUrl(telefono: number): void {
    window.open(`https://api.whatsapp.com/send?phone=${telefono}`, '_blank');
  }
}
