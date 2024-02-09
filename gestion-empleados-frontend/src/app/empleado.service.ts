import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //URL de listado empleado Backend

  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }

  //Obtener los empleados

  obtenerListaDeEmpleados():Observable<Empleado[]>{
  return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

obtenerEmpleadoPorId(id:number):Observable<Empleado>{
  return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
}

    //Para registrar empleados

  registrarEmpleado(empleado:Empleado): Observable<Object>{

    return this.httpClient.post(`${this.baseURL}`, empleado);
    }
    actualizarEmpleado(id:number,empleado:Empleado): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
    }


    eliminarEmpleado(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);

    }
    
  }
