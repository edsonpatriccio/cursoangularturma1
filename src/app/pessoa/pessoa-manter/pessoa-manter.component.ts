import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pessoa } from '../pessoa';


@Component({
  selector: 'app-pessoa-manter',
  templateUrl: './pessoa-manter.component.html',
  styleUrls: ['./pessoa-manter.component.css']
})
export class PessoaManterComponent implements OnInit {

  titulo: string = 'Incluir Pessoa';

  @Output('pessoaEnviar') pessoaEmitir: EventEmitter<Pessoa> = new EventEmitter();
  @Output('pessoaEnviarAlterar') pessoaEmitirAlterar: EventEmitter<Pessoa> = new EventEmitter();
  @Input()pessoa: Pessoa = new Pessoa();

  @Input()operacao: string = 'pesquisar';
  @Output()operacaoChange: EventEmitter<string> = new EventEmitter();

  listaEstados: string[] = ["AC", "PE", "PA","PB"];
  listaMunicipios: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  incluir(){
    
    this.pessoaEmitir.emit(this.pessoa);
    this.pessoa = new Pessoa();
    this.operacao = 'pesquisar';
    this.operacaoChange.emit(this.operacao);
  }

  alterar(){
    this.pessoaEmitirAlterar.emit(this.pessoa);
    this.pessoa = new Pessoa();
    this.operacao = 'pesquisar';
    this.operacaoChange.emit(this.operacao);
  }

  voltar(){
    this.operacao = 'pesquisar';
    this.operacaoChange.emit(this.operacao);
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
