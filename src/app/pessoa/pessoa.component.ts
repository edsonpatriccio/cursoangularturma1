import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  titulo: string = 'Consultar Pessoa';  

  pessoa: Pessoa = new Pessoa();

  mostrar: boolean = false;


  operacao: string = 'pesquisar';
  

  listaPessoas: Pessoa[] = [
    {"codigo": "1",
      "nome": "Genival",
      "telefone": "999999",
      "dataNascimento": new Date(),
      "endereco": "avenida",
      "bairro": "Torre",
      "cidade": {codigo: "1", nome:"Recife"},
      "estado": "PE",
      ativo: false
    },
    {"codigo": "2",
      "nome": "Ze",
      "telefone": "999999",
      "dataNascimento": new Date(),
      "endereco": "avenida",
      "bairro": "Torre",
      "cidade": {codigo: "1", nome:"Recife"},
      "estado": "PE",
      ativo: false
    },
    {"codigo": "3",
      "nome": "Joao",
      "telefone": "999999",
      "dataNascimento": new Date(),
      "endereco": "avenida",
      "bairro": "Torre",
      "cidade": {codigo: "1", nome:"Recife"},
      "estado": "PE",
      ativo: false
    }
  ];

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

  

  remover(pessoa){

    this.listaPessoas = this.listaPessoas.filter(
      obj => obj !== pessoa);
    
  }

  adicionarPessoa(pessoa){

    this.listaPessoas.push(pessoa);

  }

  incluir(){
    this.pessoa = new Pessoa(); 
    this.operacao = 'incluir';
  }

  alterar(pessoa){
    this.pessoa = pessoa;  
    this.operacao = 'alterar';
  }

}
