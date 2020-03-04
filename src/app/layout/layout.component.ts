import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  titulo: string = 'Cadastro Pessoa';

  texto: string = 'genival';

  pessoa: Pessoa = new Pessoa();

  mostrar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  imprimir(){    
    alert('Codigo: ' + this.pessoa.codigo 
    + '\nNome:' + this.pessoa.nome 
    + '\nTelefone:' + this.pessoa.telefone
    + '\nData de Nascimento' + this.pessoa.dataNascimento
    + '\nEndereço' + this.pessoa.endereco
    + '\nBairro' + this.pessoa.bairro
    + '\nCidade' + this.pessoa.cidade
    + '\nEstado' + this.pessoa.estado
    );
  }  

  invertermostrar(){
    this.mostrar = !this.mostrar;
  }

}
