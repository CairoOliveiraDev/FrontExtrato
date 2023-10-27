import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  private apiUrl = 'https://localhost:7233/api/lancamentos';

  constructor(private http: HttpClient) { }

  obterLancamentos(dataInicial: Date, dataFinal: Date) {
    return this.http.get(`${this.apiUrl}?dataInicial=${dataInicial.toISOString()}&dataFinal=${dataFinal.toISOString()}`);
  }

  inserirLancamento(lancamento: any) {
    return this.http.post(this.apiUrl, lancamento);
  }

  atualizarLancamento(id: number, lancamento: any) {
    return this.http.put(`${this.apiUrl}/${id}`, lancamento);
  }

  cancelarLancamento(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}