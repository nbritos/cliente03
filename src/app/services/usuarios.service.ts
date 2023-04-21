import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../models/usuarioModel';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  API_URI = 'http://localhost:3000/user';
	
  usuarios: Usuario[];
  
	constructor(/*private http: HttpClient*/){
    this.usuarios = [{
      "id": 1,
      "nombre": "Pedro",
      "email": "pedro@email.net",
      "password": "123456",
      "rol": "admin"
    }, {
      "id": 2,
      "nombre": "Juan",
      "email": "juan@email.net",
      "password": "123456",
      "rol": "usuario"
    }, {
      "id": 3,
      "nombre": "Hugo",
      "email": "hugo@email.net",
      "password": "123456",
      "rol": "usuario"
    }, {
      "id": 4,
      "nombre": "Carlos",
      "email": "carlos@email.net",
      "password": "123456",
      "rol": "admin"
    }, {
      "id": 5,
      "nombre": "Maria",
      "email": "maria@email.net",
      "password": "123456",
      "rol": "admin"
    }];
  }
 

	listarUsuarios(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		//return this.http.get(`${this.API_URI}/list`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
    return this.usuarios;
	}
	
	buscarUsuario(id:string){
		//return this.http.get(`${this.API_URI}/find/${id}`);
	}
}

