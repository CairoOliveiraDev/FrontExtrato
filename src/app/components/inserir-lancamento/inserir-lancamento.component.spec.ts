import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirLancamentoComponent } from './inserir-lancamento.component';

describe('InserirLancamentoComponent', () => {
  let component: InserirLancamentoComponent;
  let fixture: ComponentFixture<InserirLancamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirLancamentoComponent]
    });
    fixture = TestBed.createComponent(InserirLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
