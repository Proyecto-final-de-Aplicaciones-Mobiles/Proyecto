import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarifaMultasPage } from './tarifa-multas.page';

describe('TarifaMultasPage', () => {
  let component: TarifaMultasPage;
  let fixture: ComponentFixture<TarifaMultasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TarifaMultasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
