import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  images: any[] = [];
  numero: any;

  constructor(private trabajadorService: TrabajadorService) {}

  ngOnInit(): void {
    this.caragarImagenes();
    this.getNumeroTrabajadores();
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  caragarImagenes() {
    this.images = [
      {
        previewImageSrc: 'assets/images/trabajo_1.jpg',
        alt: 'Te ayudamos a conseguir un trabajo de lo que sepas hacer',
        title: 'Nuestra función',
      },
      {
        previewImageSrc: 'assets/images/trabajo_2.jpg',
        alt: 'Solo tines que registrarte y publicar que es lo que sabes hacer',
        title: '¿Como lo hacemos?',
      },
      {
        previewImageSrc: 'assets/images/trabajo_3.jpg',
        alt: 'La comunidad de DomiWork vera tu perfil y si te necesitan te contactarán',
        title: '¿Y despues?',
      },
    ];
  }

  getNumeroTrabajadores() {
    this.trabajadorService.getNumeroTrabajadores().subscribe((data) => {
      console.log(data);

      this.numero = data;
    });
  }
}
