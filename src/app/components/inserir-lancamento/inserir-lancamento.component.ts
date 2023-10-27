import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inserir-lancamento',
  templateUrl: './inserir-lancamento.component.html',
  styleUrls: ['./inserir-lancamento.component.css']
})
export class InserirLancamentoComponent implements OnInit {

  lançamento: any = {
    id: null,
    descrição: '',
    data: '',
    valor: 0,
    avulso: true,
    status: 'Válido'
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    const lançamento = {
      id: null,
      descrição: this.lançamento.descrição,
      data: this.lançamento.data,
      valor: this.lançamento.valor,
      avulso: this.lançamento.avulso,
      status: 'Válido'
    };

    this.http.post('/api/lancamentos', lançamento).subscribe(
      (data: any) => {
        // Redirecionar o usuário para a tela de extrato
      },
      (error: any) => {
        console.log("Erro na requisição");
        
      }
    );
  }
}

