import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLancamentoComponent } from './editar-lancamento.component';

describe('EditarLancamentoComponent', () => {
  let component: EditarLancamentoComponent;
  let fixture: ComponentFixture<EditarLancamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarLancamentoComponent]
    });
    fixture = TestBed.createComponent(EditarLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
