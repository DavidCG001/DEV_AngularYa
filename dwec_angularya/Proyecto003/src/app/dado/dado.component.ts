import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})

export class DadoComponent implements OnInit {
  
  ngOnInit(): void {
    this.valor = this.generateAleatorio();
  }

  valor = 1;

  // constructor() {
  //   this.valor = this.generateAleatorio();
  // }

  generateAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }




}
