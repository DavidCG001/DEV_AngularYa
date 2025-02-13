import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto001';
  // name = 'David';
  // edad = 28;
  // fumador = true;


  // esFumador() {
  //   return this.fumador ? 'Sí' : 'No';
  // }

  nombre='';
  apellido='';
}
