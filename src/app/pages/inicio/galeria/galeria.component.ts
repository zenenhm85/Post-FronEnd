import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*=============================================
PINTEREST GRID
=============================================*/

    $('.pinterest_grid').pinterest_grid({
      no_columns: 4, //Número de columnas
      padding_x: 10, //Márgenes internas horizontal
      padding_y: 10, //Márgenes internas vertical
      margin_bottom: 50, //Márgen externa inferor
      single_column_breakpoint: 769, //Punto de quiebre para una sola columna
    });

    /*=============================================
EKKO LIGHTBOX
=============================================*/

    $(document).on('click', "[data-toggle='lightbox']", function (e) {
      e.preventDefault(); //Quitar eventos que vengan por defecto en el navegador
      $(this).ekkoLightbox(); //Activar la acción del plugin Ekko Lightbox
    });
  }
}
