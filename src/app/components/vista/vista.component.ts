import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarioModel';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  titulo: String = "Vista formulario";
  seleccionMult: any[] = [];


  constructor(private usuariosService: UsuariosService) {
    this.usuarios = usuariosService.listarUsuarios();
    console.log(this.titulo);
    console.log(this.usuarios)
  }

  usuarios: Usuario[];
  revelar: boolean = false;

  ngOnInit(): void {
    this.titulo = 'titulo modificado';
  }

  procesar(): void {
    console.log("Capturando el formulario");
  }
  addRemoveItem($event: any): void {
    console.log("Capturando el checkbox");
    if($event.target.checked){
      //push agrega un nuevo elemento al array
      this.seleccionMult.push($event.target.checked);
    }else{
      //splice quita elementos del array. Recibe splice(inicio, cuantos)
      //indexOf devuelve la posicion en el array del valor pasado por parametro
      this.seleccionMult.splice(this.seleccionMult.indexOf($event.target.value),1);
    }
    //el metodo sort mantiene el orden del array. Es conveniente porque las acciones del usuario no lo son
    this.seleccionMult.sort();
    console.log(this.seleccionMult);    
  }
}



