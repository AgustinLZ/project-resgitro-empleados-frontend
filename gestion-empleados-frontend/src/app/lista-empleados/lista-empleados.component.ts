import Swal, { SweetAlertResult } from 'sweetalert2';
import { EmpleadoService } from './../empleado.service';
import { Empleado } from './../empleado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  empleado: Empleado | null = null;


  constructor(private empleadoServicio:EmpleadoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

    eliminarEmpleado(id:number){
      Swal.fire({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar al empleado",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, elimínalo',
        cancelButtonText: 'No, cancelar',
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
    }).then((result: SweetAlertResult<any>) => {
      if (result.isConfirmed) {
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          Swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con éxito',
            'success'
          );
        });
      }
    });
    }


  detallesDelEmpleado(id:number){
    console.log("empleado id :" + id)
    this.router.navigate(['detalles-empleado', id]);
  }
}



