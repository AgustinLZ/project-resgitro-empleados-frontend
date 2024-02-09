import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDelEmpleadoComponent } from './detalles-empleado.component';

describe('DetallesEmpleadoComponent', () => {
  let component: DetallesDelEmpleadoComponent;
  let fixture: ComponentFixture<DetallesDelEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesDelEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesDelEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
