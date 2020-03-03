import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  titulo: string = 'cabecalho works!';

  texto: string = 'genival';

  constructor() { }

  ngOnInit(): void {
  }

  ola(){    
    alert('Ola '+ this.texto);
  }

}
