import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdPacientePage } from './upd-paciente.page';

describe('UpdPacientePage', () => {
  let component: UpdPacientePage;
  let fixture: ComponentFixture<UpdPacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
