import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarPlacaPage } from './buscar-placa.page';

describe('BuscarPlacaPage', () => {
  let component: BuscarPlacaPage;
  let fixture: ComponentFixture<BuscarPlacaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuscarPlacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
