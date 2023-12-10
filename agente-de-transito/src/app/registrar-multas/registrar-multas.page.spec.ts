import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarMultasPage } from './registrar-multas.page';

describe('RegistrarMultasPage', () => {
  let component: RegistrarMultasPage;
  let fixture: ComponentFixture<RegistrarMultasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarMultasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
