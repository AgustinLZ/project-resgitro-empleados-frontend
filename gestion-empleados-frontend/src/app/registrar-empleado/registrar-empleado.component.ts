import { EmpleadoService } from './../empleado.service';
import { Empleado } from './../empleado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { error } from 'console';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado:Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService, private router:Router){}

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoService.registrarEmpleado(this.empleado).subscribe(dato=>{
      console.log(dato);
      this.irAlaListaDeEmpleados();

    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }
  onSubmit(){
    this.guardarEmpleado();
  }

}
