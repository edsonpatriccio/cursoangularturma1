import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa-manter',
  templateUrl: './pessoa-manter.component.html',
  styleUrls: ['./pessoa-manter.component.css']
})
export class PessoaManterComponent implements OnInit {

  titulo: string = 'Incluir Pessoa';

  pessoa: Pessoa = new Pessoa();

  listaEstados: string[] = ["AC", "PE", "PA","PB"];
  listaMunicipios: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  incluir(){
    //this.listaPessoas.push(this.pessoa);
    this.pessoa = new Pessoa();
  }

  carregarCidade(){    

    if(this.pessoa.estado == 'PE'){
      this.listaMunicipios = [
        {codigo: "1", nome:"Recife"} ];
    }else if(this.pessoa.estado == 'PB'){
      this.listaMunicipios = [
        {codigo: "2", nome:"João Pessoa"} ];
    }else{
      this.listaMunicipios = [{codigo: "2", nome:"Vitoria"},
      {codigo: "3", nome:"Bezerros"},
      {codigo: "4", nome:"Caruaru"}];
    }    
  }

}
