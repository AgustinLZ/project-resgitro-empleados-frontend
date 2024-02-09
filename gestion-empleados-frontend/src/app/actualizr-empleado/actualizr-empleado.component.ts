import Swal from "sweetalert2";
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from './../empleado';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';


@Component({
  selector: 'app-actualizr-empleado',
  templateUrl: './actualizr-empleado.component.html',
  styleUrl: './actualizr-empleado.component.css'
})
export class ActualizrEmpleadoComponent implements OnInit {

id:number;
empleado:Empleado = new Empleado();
constructor(private empleadoService:EmpleadoService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato=>{
    this.empleado=dato;

  }, error => console.log(error));

}

irAlistaDeEmpleado(){
  this.router.navigate(['/empleado']);
  Swal.fire('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
}

onSubmit(){
  this.empleadoService.actualizarEmpleado(this.id,this.empleado).subscribe(dato => {
    this.irAlistaDeEmpleado();
  },error => console.log(error));
}

}
