import  swal  from 'sweetalert2';
import { EmpleadoService } from './../empleado.service';
import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrl: './detalles-empleado.component.css'
})
export class DetallesDelEmpleadoComponent implements OnInit{

empleado: Empleado;
id:number;


  constructor(private routerr: ActivatedRoute,private route:Router, private empleadoService: EmpleadoService) {}


  ngOnInit():void {
    this.id = this.routerr.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato=>{
      this.empleado = dato;
      swal.fire(`Detalles del empleado ${this.empleado.apellido}`);
      console.log("empl " + this.empleado.apellido);
    });
  }


  }













